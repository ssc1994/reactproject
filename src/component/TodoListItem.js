import {
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdRemoveCircleOutline,
} from 'react-icons/md';
import cn from 'classnames';
import '../layout/TodoListItem.css'

const TodoListItem = ({todo}) => {
    const {text, checked} = todo;

    return (
        <div className='TodoListItem'>
            <div className={cn ('checkBox', {checked})}>
                {checked ? <MdCheckBox/> : <MdCheckBoxOutlineBlank />}
                <div className='text'>{text}</div>
            </div>
            <div className='remove'>
                <MdRemoveCircleOutline/>
            </div>
        </div>
    );
};

export default TodoListItem;