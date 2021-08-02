import { Audio } from "expo-av";
import * as MediaLibrary from 'expo-media-library';

export const play = async (playbackObj: Audio.Sound, file: MediaLibrary.Asset) => {
    try {
        console.log(`audio is playing ${file.filename}`);
        return await playbackObj.loadAsync({ uri: file.uri }, { shouldPlay: true });
    } catch(e){
        console.log(`There's an error while playing ${file.filename}`, e.message);
    }   
}

export const pause = async (playbackObj: Audio.Sound, file: MediaLibrary.Asset) => {
    try {
        console.log('audio is already playing');
        return await playbackObj.pauseAsync();
    } catch(e) {
        console.log(`There's an error while trying to pause  ${file}`, e.message);
    }
}