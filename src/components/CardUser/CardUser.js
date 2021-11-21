import React from 'react';
import './CardUser.css';

const CardUser = ({ data }) => (
	<div className="CardUser">
		<img src={data.avatar_url} alt='avatar' width='220px'/>
		<h4>{data.login}</h4>
		<span>{data.id}</span>
		<p><a href={data.url}>{data.url}</a></p>
	</div>
);

export default CardUser;