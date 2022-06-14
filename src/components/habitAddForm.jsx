import React, { memo } from 'react';



const HabitAddForm = memo(props =>{
        const formRef=React.createRef();
        const inputRef=React.createRef();// DOM요소 생성
    
        const onSubmit=event=>{
            event.preventDefault();
            const name=inputRef.current.value;
            name && props.onAdd(name);
            formRef.current.reset();
        };
    
        return (
            <form ref={formRef} className='add-form' onSubmit={onSubmit}>
                <input 
                    ref={inputRef}
                    type="text" 
                    className='add-input' 
                    placeholder='입력하세요'
                />
                <button className="add-button">Add</button>
            </form>
        );
    }
);

export default HabitAddForm;

