import { faVolumeHigh, faVolumeLow } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faVolumeHigh } from '@fortawesome/free-brands-svg-icons'


export const Interface = (props) => 
{
    const { audio, setAudio } = props

    const toggleAudio = () =>
    {
        if(audio)
        {
            setAudio(false)
        }
        if(!audio)
        {
            setAudio(true)
        }
    }

    return(
    <>
        <div className='overlay'>
            <header className='flex justify-end'>
                <ul className='flex items-end mt-0'>
                    <li className='px-4 py-2 text-white'>
                        <a href="https://mstdn.social/@stux" target="_blank">
                            creator
                        </a>
                    </li>
                    <li className='px-4 py-2 text-white'>
                        <a href="https://github.com/mstdn/Matrix" target="_blank">
                            source
                        </a>
                    </li>
                    <li className='px-4 py-2 text-white'>
                        <a href="https://www.youtube.com/watch?v=JlDBqvc7Mw0" target="_blank">
                            soundtrack
                        </a>
                    </li>
                </ul>
            </header>

            <div className="absolute bottom-0 right-0 p-4">
                <div className="flex">
                    <div onClick={ toggleAudio }>
                        {/* { audio && (
                            <FontAwesomeIcon icon={ faVolumeHigh } size='lg' color='#0000' />

                        ) } */}
                        <FontAwesomeIcon icon={audio ? faVolumeHigh : faVolumeLow } size='lg' color={audio ? '#ffffff' : '#fc6d27'} />
                    </div>
                    {/* <div className='ml-2'>
                        icon
                    </div> */}
                </div>
            </div>
        </div>
    </>)
}