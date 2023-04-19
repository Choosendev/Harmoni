import React from 'react';
import ProfileHero from './ProfileHero';

const Profile = () => {
  return (
    <div id='profile'>
      <ProfileHero />
      <div>
        <div className='flex justify-between'>
          <h4>Intro</h4>
          <p>Edit</p>
        </div>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni .
        </p>

        {/* Contact Details: Locations and Social Links */}
        <div>
          <div>
            {/* Location Icon */}
            <p>Lagos, Nigeria</p>
          </div>
          <div>{/* Social Icons */}</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
