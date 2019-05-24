let express = require('express')

let app = express()

app.use(express.static('pulic'))
const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.info(`server has started on ${PORT}`))

// console.log("hello dev")