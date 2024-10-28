export default class BootcampService {
//DEJO COMENTADO EL THROW PORQUE ESTÁ INTERFIRIENDO CON LAS RUTAS

    //list or GET all bootcamps
    async listBootcamps() {
        const response = await fetch('http://localhost:5000/api/auth/bootcamps/all', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',

                "Authorization": "Bearer " + localStorage.getItem("token")
            },
        });

        if (response.ok) {
            const data = await response.json();

            return data.filter((b) =>{

                return b.active;

            });

        }
        return [];

    }

    //ADD bootcamps
    async addBootcamp(bootcamp) {
        
        try {
            bootcamp.technologies = bootcamp.technologies.split(',');

            const response = await fetch('http://localhost:5000/api/auth/bootcamps/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token'),
                },
                body: JSON.stringify(bootcamp),
            });

            if (!response.ok) {
               // throw new Error('Error creating Bootcamp'); 
            }

            const data = await response.json();
            console.log('Bootcamp successfuly created:', data);
            return data;
        } catch (error) {
            console.error('Hubo un error:', error);
        }
    }


    //UPDATE bootcamps
    async updateBootcamp(id, updatedBootcamp) {
        try {
            updatedBootcamp.technologies = updatedBootcamp.technologies.split(',');
            const response = await fetch(`http://localhost:5000/api/auth/bootcamps/update/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token'),
                },
                body: JSON.stringify(updatedBootcamp),
            });
    
            if (!response.ok) {
                if (response.status === 404) {
                 //   throw new Error('Bootcamp not found');
                }
               // throw new Error('Error updating bootcamp');
            }
    
            const data = await response.json();
            console.log('Bootcamp successfuly uptated', data);
            return data;
        } catch (error) {
            console.error('Hubo un error:', error);
        }
    }
    

    //DELETE bootcamps
    async deleteBootcamp(id) {
        try {
            const response = await fetch(`http://localhost:5000/api/auth/bootcamps/delete/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token'),
                },
            });
    
            if (!response.ok) {
                if (response.status === 404) {
                 //   throw new Error('Bootcamp not found');
                }
              //  throw new Error('Error desactivating bootcamp');
            }
    
            const data = await response.json();
            console.log('Bootcamp successfully deactivated:', data);
            return data;
        } catch (error) {
            console.error('Hubo un error:', error);
        }
    }
}    