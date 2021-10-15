import * as yup from 'yup'

const Signup = () => {

    const schema = yup.object


    return(

        <form>
            <input 
                placeholder='Nome deu suário'
            />
            <input 
                placeholder='Email'
            />
            <input 
                placeholder='Confirmar email'
            />
            <input 
                placeholder='Senha'
            />
            <input 
                placeholder='Confirmar senha'
            />



        </form>

    )
}

export default Signup;