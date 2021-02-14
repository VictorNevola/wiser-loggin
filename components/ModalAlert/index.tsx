import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import * as S from "./style";
import { IStateReturn } from "../../types/User/index";

export default function ModalAlert() {
    const selectUSerState = (state: IStateReturn) => state.user
    const user = useSelector(selectUSerState);
    const [ active, setActive ] = useState(false);
    const [ isError, setIsError ] = useState(true);
    const [ messagem, setMessage ] = useState('');
    
    useEffect(() => {
        if(user && !active) {

            setMessage(user.message);
            setActive(true);

            if(user.isAuthenticated) {
                setIsError(false);
            }else {
                setIsError(true);
            }

            setTimeout(() => {
                setActive(false);
            }, 5000);
            
        }

    }, [user]);

    return (
        <S.div active={active} error={isError}>
            <span>{messagem}</span>
        </S.div>
    );
}