import Gallery from './support_files/Gallery'
import {Profile} from './support_files/Profile'
import { Button, Text } from './support_files/ButtonText'

export function Import_Export_Components() {
    return(
        <div>
            <div className="sub-section">
                <Gallery/>
            </div>
            <div className="sub-section">
                <Profile/>
            </div>
            <Text/>
            <Button/>
        </div>
    )
}