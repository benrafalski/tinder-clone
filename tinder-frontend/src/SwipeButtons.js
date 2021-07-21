import './SwipeButtons.css'
import ReplayIcon from '@material-ui/icons/Replay'
import CloseIcon from '@material-ui/icons/Close'
import StarRateIcon from '@material-ui/icons/StarRate'
import FavoriteIcon from '@material-ui/icons/Favorite'
import FlashOnIcon from '@material-ui/icons/FlashOn'
import { IconButton } from '@material-ui/core'

const SwipeButtons = () => {
    return (
        <div className='swipe__buttons'>
            <IconButton className='swipe__buttons__repeat'>
                <ReplayIcon fontSize='large'/>
            </IconButton>
            <IconButton className='swipe__buttons__left'>
                <CloseIcon fontSize='large'/>
            </IconButton>
            <IconButton className='swipe__buttons__star'>
                <StarRateIcon fontSize='large'/>
            </IconButton>
            <IconButton className='swipe__buttons__right'>
                <FavoriteIcon fontSize='large'/>
            </IconButton>
            <IconButton className='swipe__buttons__lightning'>
                <FlashOnIcon fontSize='large'/>
            </IconButton>
        </div>
    )
}

export default SwipeButtons