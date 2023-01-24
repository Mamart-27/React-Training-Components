import React from 'react';
import './avatarwithbadge.css';

const Avatar = (props) => {
    const {src, alt} = props;
    return (
        <img src={src} alt={alt} className="avatar" />
    );
}

const Badge = (props) => {
    const {text} = props;
    return (
        <span className="badge">{text}</span>
    );
}

const AvatarWithBadge = (props) => {
    const {src, alt, badgeText} = props;
    return (
        <div className="avatar-with-badge">
            <Avatar src={src} alt={alt} />
            <Badge text={badgeText} />
        </div>
    );
}

export { Avatar, Badge, AvatarWithBadge };
