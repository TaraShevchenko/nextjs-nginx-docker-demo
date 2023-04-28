import { Router, Handler } from 'express'

export default (router: Router): Handler | void =>
    router.get('/users', (request, response, next) => {
        response.status(200).json([
            {
              id: 1,
              name: "Leanne Graham",
              username: "Bret",
              email: "LeanneGraham@gmail.com",
            },
            {
              id: 2,
              name: "Ervin Howell",
              username: "Antonette",
              email: "ErvinHowell@gmail.com",
            },
        ])
        next()
    })
