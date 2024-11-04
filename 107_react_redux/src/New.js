import { useDispatch } from 'react-redux';

const New = () => {

    const dispatch = useDispatch();

    const useEditStatusInStore = () => {
        dispatch({ type: 'CHANGE_STATUS' })
    }

    return (
        <div>
            <h2>Component New</h2>
            <button onClick={useEditStatusInStore}>Click here</button>
        </div>
    );

}

export default New;