import pathToRegexp from '../../utils/path-to-regexp'

function usePath(basePath, req, res) {
  
  function get(path = '/', cb) {
    if (req.method === 'GET') {
      if(path === '/') {
        return cb(req, res)
      } else {
        const queries = req.query
        
        let keys = []
        const result = pathToRegexp(path, keys)
        let 
        return cb(req, res)
      }
    }
  }

  return { get }
}

export default function handler(req, res) {
  const { get } = usePath('/api/posts', req, res)

  get('/', (_req, _res) => {
    _res.status(200).json([{ id: 1, title: 'one', id: 2, title: 'two' }])
  })

  get('/:id', (req, res) => {
    const id = req.params.id
    res.status(200).json({ id: 1, title: 'one' })
  })

  let keys = []
  const result = pathToRegexp('/posts/:id', keys)
  // console.log(result, keys)

  // switch (req.method) {
  //   case 'GET': {
  //     console.log(req)
  //     return res
  //       .status(200)
  //       .json([{ id: 1, title: 'One' }, { id: 2, title: 'Two' }])
  //   }
  //   case 'PUT': {
  //     return res.status(200).json({ PUT: true })
  //   }
  //   case 'DELETE': {
  //     return res.status(200).json({ DELETE: true })
  //   }
  //   case 'POST': {
  //     return res.status(200).json({ POST: true })
  //   }
  // }
}
