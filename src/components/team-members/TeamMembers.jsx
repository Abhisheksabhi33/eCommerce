import React from "react";
import "./team-members.scss";
import { teamMembers } from "../../data/teammembers";

const TeamMembers = () => {
  return (
    <div className="team-section">
      <p className="card-section-title">
        Without bonding and coordination, every project is a faliure. Look at
        who makes KICKSUP great. ;)
      </p>
      <div className="card-container">
        {teamMembers.map((member) => {
          return (
            <div className="card" key={member.id}>
              <img
                className="card-img"
                src={member.profile}
                alt={member.name}
              />
              <div className="card-info">
                <div className="card-title">{member.name}</div>
                <div className="card-designation">{member.designation}</div>
                <div className="social-icons">
                  {member.social.map((socialIcons, index) => {
                    return (
                      <img
                        className="icon"
                        alt="website logo"
                        src={socialIcons}
                        key={index}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <p className="card-section-message">and You! ;)</p>
    </div>
  );
};

export default TeamMembers;
