import { Dispatch } from 'redux';
import { api } from '../../configs/api';
import { GetState } from '../../configs/store';

export const postImage = (reduxActionRequest: string, reduxActionSuccess: string, reduxActionFailure: string, formData: any, nextAction: (img: any) => void) => (dispatch: Dispatch, getSate: GetState) => _postImage(reduxActionRequest, reduxActionSuccess, reduxActionFailure, formData, nextAction,dispatch,getSate);
const _postImage = async (reduxActionRequest: string, reduxActionSuccess: string, reduxActionFailure: string, formData: any, nextAction: (img: any) => void, dispatch: Dispatch, getSate: GetState) => {
    try {
        dispatch({type: reduxActionRequest})

        const token = getSate().auth.token;
        
        const response = await fetch(`${api.publications}/files`,{
            method: "POST",
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'multipart/form-data'
            },
            body: formData
        });
        
        const json = await response.json();
        
        if(!json.success) throw json;

        const nextActionWrapper = (file) => nextAction(file);

        dispatch({type: reduxActionSuccess, payload: json.data.file })

        nextActionWrapper(json.data.file);
        
    } catch (err) {
        console.log("err",err)
        dispatch({type: reduxActionFailure})

    }
}