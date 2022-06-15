import React from 'react'
import CustomButton from '../CustomButton'

const SocialSignInButton = () => {
     //onSignInWithGoogle
     const onSignInWithGoogle = () => {
        console.warn("onSignInWithGoogle");
    };
    //onSignInWithFacebook
    const onSignInWithFacebook = () => {
        console.warn("onSignInWithFacebook");
    };

    return (
        <>
            <CustomButton
                onPress={onSignInWithGoogle}
                text="Đăng nhập bằng Google"
                type="PRIMARY"
                bgColor="#FAE9EA"
                fgColor="#DD4D44"
            />
            <CustomButton
                onPress={onSignInWithFacebook}
                text="Đăng nhập bằng Facebook"
                type="PRIMARY"
                bgColor="#E7EAF4"
                fgColor="#4765A9"
            />
        </>
    )
}

export default SocialSignInButton