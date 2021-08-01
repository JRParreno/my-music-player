import React, { createContext } from "react";
import * as MediaLibrary from 'expo-media-library';
import AudioModel from '../models/MediaModel';

export interface IAudioState {
    audios: { [key: string]: AudioModel[] };
}

export const initialAudioState: IAudioState = {
    audios: {},
};

export interface IAudioActions {
    type: 'set_audio';
    payload: Array<MediaLibrary.Asset>;
}

const songName = (song: string) => {
    let middle = song.indexOf('-');
    let titleTemp = song.substring(middle + 2, song.length);

    return titleTemp.substring(0, titleTemp.indexOf('.'));
}

export const audioReducer = (state: typeof initialAudioState, action: IAudioActions) => {
    let audio = action.payload;
    let audios = { ...state.audios };
    switch (action.type) {
        case 'set_audio':
            // audio.forEach(function (value) {
            //     audios[value.filename] = [value];
            // });
            audios['audios'] = [];
            audio.map(value => {
                let newData = new AudioModel(
                    value.id,
                    value.filename,
                    value.uri,
                    value.width,
                    value.height,
                    value.creationTime,
                    value.modificationTime,
                    value.duration,
                    value.albumId,
                    value.mediaSubtypes,
                    value.mediaType
                );
                audios['audios'].push(newData);
            })

            return { ...state, audios };
        default:
            return state;
    }
};

export interface IAudioContextProps {
    audioState: IAudioState;
    audioDispatch: React.Dispatch<IAudioActions>;
}

const AudioContext = createContext<IAudioContextProps>({
    audioState: initialAudioState,
    audioDispatch: () => { }
});

export const AudioContextConsumer = AudioContext.Consumer;
export const AudioContextProvider = AudioContext.Provider;
export default AudioContext;