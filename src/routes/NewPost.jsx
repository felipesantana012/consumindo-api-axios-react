
import Btn from "../components/Btn/Btn"
import "./NewPost.css"

const NewPost = () => {
  return (
    <div className='new-post'>
      <h2>Inserir novo Post</h2>

      <form>
        <div className='form-control'>
            <label htmlFor='title'>Titulo: </label>
            <input type='text' name='title' id='title' placeholder='Digite o Titulo'></input>
        </div>

        <div className='form-control'>
            <label htmlFor='body'>Conteudo: </label>
            <textarea name='body' id='body' placeholder='Digite o conteudo'></textarea>
        </div>

        <input type='submit' value='criar post' className='btn'/>
      </form>
    </div>
  )
}

export default NewPost