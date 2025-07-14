import axios from "axios"

const openLibraryAPI = axios.create({
  baseURL: "https://openlibrary.org",
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
})

// Interceptor para debug
openLibraryAPI.interceptors.request.use(
  (config) => {
    console.log('Requisição sendo feita:', config.url);
    return config;
  },
  (error) => {
    console.error('Erro na requisição:', error);
    return Promise.reject(error);
  }
);

openLibraryAPI.interceptors.response.use(
  (response) => {
    console.log('Resposta recebida:', response.status, response.config.url);
    return response;
  },
  (error) => {
    console.error('Erro na resposta:', error.response?.status, error.message);
    return Promise.reject(error);
  }
);

// Buscar livros por título
async function buscarLivrosPorTitulo(titulo = "harry potter"){
    try {
        const response = await openLibraryAPI.get(`/search.json?title=${encodeURIComponent(titulo)}`)
        return response.data.docs || []
    } catch (error) {
        console.error('Erro ao buscar livros:', error)
        throw error
    }
}

// Buscar livros populares (sem filtro)
async function getLivros(){
    try {
        const response = await openLibraryAPI.get('/search.json?subject=fiction&limit=20')
        return response.data.docs || []
    } catch (error) {
        console.error('Erro ao buscar livros:', error)
        throw error
    }
}

// Buscar detalhes de um livro específico
async function getLivroPorId(id){
    try {
        const response = await openLibraryAPI.get(`/works/${id}.json`)
        return response.data
    } catch (error) {
        console.error('Erro ao buscar livro:', error)
        throw error
    }
}

// Buscar livros por autor
async function buscarLivrosPorAutor(autor){
    try {
        const response = await openLibraryAPI.get(`/search.json?author=${encodeURIComponent(autor)}`)
        return response.data.docs || []
    } catch (error) {
        console.error('Erro ao buscar livros por autor:', error)
        throw error
    }
}

export{
    getLivros,
    buscarLivrosPorTitulo,
    getLivroPorId,
    buscarLivrosPorAutor
}
