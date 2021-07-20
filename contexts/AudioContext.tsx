import React, { createContext } from "react";
import * as MediaLibrary from 'expo-media-library';
import AudioModel from '../models/MediaModel';

export interface IAudioState {
    audios: { [key: string]: MediaLibrary.Asset[] };
}

export const initialAudioState: IAudioState = {
    audios: {}
};

export interface IAudioActions {
    type: 'view_audio';
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
        case 'view_audio':
            // audio.forEach(function (value) {
            //     audios[value.filename] = [value];
            // });
            return state;
            break;
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