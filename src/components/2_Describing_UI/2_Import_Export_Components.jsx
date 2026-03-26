import Gallery from './support_files/Gallery'
import {Profile} from './support_files/Profile'
import { Button, Text } from './support_files/ButtonText'

export function Import_Export_Components() {
    return(
        <div>
            <div className="sub-section">
                <Gallery/>
                <Profile/>
            </div>
            <div className="sub-section">
                <Text/>
            </div>
            <div className="sub-section">
                <Button/>
            </div>
        </div>
    )
}