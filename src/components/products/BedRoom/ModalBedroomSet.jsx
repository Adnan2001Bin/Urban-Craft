import React from 'react'
import ReactDOM from 'react-dom'
import { Fragment } from 'react'
import './ModalBedroomSet.css'


const Backdrop = props => {
    return <div onClick={props.hideset} className='fixed z-20 w-full  h-full bg-slate-900 opacity-40' />
}

const ModalOverlay = props => {
    return <div className='flex justify-center '>
        <div className="overflow-scroll bedroomsetmodal fixed flex items-center justify-between px-4 z-30 w-8/12 bg-gray-100 top-5 rounded-3xl">
            <div className='w-full'>
                {props.children}
            </div>
        </div>
    </div>
}

const portalElement = document.getElementById('overlays');


function ModalBedroomSet(props) {
    return <Fragment>
        {ReactDOM.createPortal(<Backdrop hideset={props.hideset} />, portalElement)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
    </Fragment>
}

export default ModalBedroomSet
