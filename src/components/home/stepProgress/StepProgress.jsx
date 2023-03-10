import React from 'react'

const StepProgress = ({props}) => {
    let defaultStyleCircle =  'flex h-10 w-10 rounded-full items-center justify-center'
    let defaultStyleLine = 'w-44 h-5 '
    let styleCircle1,styleCircle2,styleCircle3 = ' bg-black'
    let styleLine1,styleLine2 = ' bg-black'

    console.log(props);

    if(props ==1){
        styleCircle1 = ' bg-red-500'
        console.log(styleCircle1);
        console.log(styleCircle1,styleCircle2,styleCircle3,styleLine1,styleLine2);
    }else if(props ==2){
        styleCircle1= ' bg-red-500'
        styleCircle2 = ' bg-red-500'
        styleLine1 = ' bg-red-500'
        console.log(styleCircle1,styleCircle2,styleLine1);
    }else if(props ==3){
        styleCircle1= ' bg-red-500'
        styleCircle2 = ' bg-red-500'
        styleCircle3 = ' bg-red-500'
        styleLine2 = ' bg-red-500'
        console.log(styleCircle1,styleCircle2,styleCircle3,styleLine2);
    }
  return (
    <div className='flex items-center'>
 

        <div className={defaultStyleCircle + styleCircle1 }><span className='text-white '>1</span></div>
        <div className={defaultStyleLine + styleLine1}></div>
        <div className={defaultStyleCircle + styleCircle2}><span className='text-white '>2</span></div>
        <div className={defaultStyleLine + styleLine2}></div>
        <div className={defaultStyleCircle + styleCircle3}><span className='text-white '>3</span></div>

    </div>
  )
}

export default StepProgress