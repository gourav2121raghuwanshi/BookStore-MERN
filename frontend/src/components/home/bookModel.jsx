import { AiOutlineClose } from 'react-icons/ai';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle } from 'react-icons/bi';
const bookModel = ({ book, onClose }) => {
    return (

        <div className='fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center '
            onClick={onClose}>
            <div
            className='w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative  '
                onClick={(event) => event.stopPropagation()}
                >
                <AiOutlineClose className='absolute right-6 top-6 text-3xl text-red-600 cursor-pointer ' onClick={onClose}/>
            </div>
        </div>


    )
}

export default bookModel