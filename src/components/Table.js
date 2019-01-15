import React from 'react';
import twitter from '../img/twitter.png';
import linkedin from '../img/linkedin.png';
import facebook from '../img/facebook.png';

const info = {
    linkedin: 'https://www.linkedin.com/company/refuelbox',
    twitter: 'https://twitter.com/refuelbox',
    facebook: 'https://www.facebook.com/refuelbox',
    color: 'skyblue',
    companyName: 'ReFuel Box',
    companyWebsite: 'http://www.refuelbox.com',
    logo: 'https://refuelbox.com/wp-content/uploads/2019/01/Email-signature-512x512_09.png',
    logoLink: 'http://www.refuelbox.com'
};

const Table = ({ firstName, lastName, position, email, skype, phone, bannerUrl }) => (
        <table>
            <tbody>
                <tr>
                    <td>
                        <a href={info.logoLink}>
                            <img src={info.logo} alt="Logo" height="80" width="80" />
                        </a>
                        <div style={{ textAlign: 'center' }}>
                            <a href={info.twitter} target="_blank" rel="noopener noreferrer">
                                <img src={twitter} alt="" width="16px" height="16px" style={{ marginRight: '4px' }} />
                            </a>
                            <a href={info.linkedin} target="_blank" rel="noopener noreferrer">
                                <img src={linkedin} alt="" width="16px" height="16px" style={{ marginRight: '4px' }} />
                            </a>
                            <a href={info.facebook} target="_blank" rel="noopener noreferrer">
                                <img src={facebook} alt="" width="16px" height="16px" />
                            </a>
                        </div>
                    </td>
                    <td><div style={{ display: 'block', borderLeft: '2px solid #272727', marginLeft: '5px', marginRight: '10px', height: '100px'}}></div></td>
                    <td>
                        <div>
                            <div style={{ marginBottom: '10px'}}>
                                <span style={{ fontWeight: 'bold' }}>{ firstName } { lastName }</span>
                                <span style={{ display: 'block', fontSize: '11px' }}>{ position }</span>
                            </div>
                            <div style={{ fontSize: '11px'}}>
                                <span style={{ display: 'block'}}>Email: <a href={'mailto:' + email} style={{ color: info.color}}>{ email }</a></span>
                                <span style={{ display: 'block'}}>Skype: <span style={{ color: info.color}}>{ skype }</span></span>
                                <span style={{ display: 'block'}}>Phone: <span style={{ color: info.color}}>{ phone }</span></span>
                            </div>
                        </div>
                    </td>
                </tr>
            </tbody>
         </table>
    );

export default Table