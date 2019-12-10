import axios from 'axios';

const url = process.env.VUE_APP_API_ENDPOINT + '/users';

class UserService {
    // Get Users
    static getUsers() {
        return new Promise(async (resolve, reject) => {
            try {
                console.log(url);

                const res = await axios.post(
                    url,
                    {
                        invoke : 'getDataPeserta'
                    }
                );
                const data = res.data.data;
                // console.log(res.data.data);
                // console.log('EIT');
                resolve(
                    data.map(user => ({
                        ...user
                    }))
                );
            } catch(err) {
                reject(err);
            }
        })
    }
}

export default UserService