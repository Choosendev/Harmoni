import Profile from '@src/pagesSrc/User/Profile';
import Layout from '@src/components/Layout';

const User = () => {
  return (
    <div>
      <div>
        <div>
          <Layout styles='flex flex-col items-center' page='user'>
            <Profile />
          </Layout>
        </div>
      </div>
    </div>
  );
};

export default User;
