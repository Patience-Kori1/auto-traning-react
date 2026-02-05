import { getImageUrl } from './Utils';
export default function Profile({personItem}) {

    return(
        <div className="profile">
            <h2>{personItem.name}</h2>
            <img 
                src={getImageUrl(personItem)}
                alt={personItem.name}
                className="avatar"
                width={70}
                height={70}
            />
            <ul>
                <li><b>Profession : </b> {personItem.job}</li>
                <li><b>Récompense : {personItem.rewardNumber} </b> {personItem.reward}</li>
                <li><b>A découvert :</b> {personItem.discovery}</li>
            </ul>

        </div>
    )
}