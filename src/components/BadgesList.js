import React from 'react';
import './styles/BadgesList.css';
class BadgesList extends React.Component{
    render(){
       return (
          <ul className="BadgesList">
             {this.props.Badges.map((badge)=>{
                return(
                   <li key={badge.id} className="BadgesListItem">
                      <img src={badge.avatarUrl}alt=""className="BadgesListItem__avatar"/>
                      <div>
                         <div><strong>{badge.firstName} {badge.lastName}</strong></div>
                         <div className="Twitter__name">
                            <span className="Twitter__logo"></span>@{badge.twitter}
                         </div>
                         <div>{badge.jobTitle}</div>
                      </div>
                   </li>
                )
             })}
          </ul>
       )
    }
 }
 
 export default BadgesList
 