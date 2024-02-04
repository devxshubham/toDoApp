import {atom} from 'recoil';

export const todoAtom = atom({
    key : 'todoAtom',
    default : {
        title : "default",
        description : "description"
    }
});