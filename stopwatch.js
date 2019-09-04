function stopwatch() {

    let SELECTORS = {
        start: 'startBtn',
        stop: 'stopBtn',
        time: 'time'
    }

    let getStartBtn = () => document.getElementById(SELECTORS.start)

    let getStopBtn = () => document.getElementById(SELECTORS.stop)

    let minutes = '00'
    let seconds = 0

    let timer = () => {
        let interval;
        let startBtn = getStartBtn()
        let stopBtn = getStopBtn()

        startBtn.addEventListener("click", () => {
            clearTimeout(interval)
            interval = setInterval(startTimer, 1000)
            startBtn.disabled = true
            stopBtn.disabled = false
        })


        stopBtn.addEventListener("click", () => {

            document.getElementById(SELECTORS.time).textContent
            clearTimeout(interval)
            startBtn.disabled = false
            stopBtn.disabled = true
        })

        function startTimer() {

            +seconds++
            let result = ""

            if (seconds <= 9) {
                seconds = `0${seconds}`
                result = `${minutes}:${seconds}`
            }
            if (seconds > 9) {
                seconds = `${seconds}`
                result = `${minutes}:${seconds}`
            }
            if (seconds > 59) {
                seconds = "00"
                minutes++
                if (minutes <= 9) {
                    minutes = `0${minutes}`
                    result = `${minutes}:${seconds}`

                    if (minutes > 9) {
                        minutes = `${minutes}`
                        result = `${minutes}:${seconds}`
                    }
                }

            }

            document.getElementById(SELECTORS.time).textContent = result
        }

        
    }
    timer()

}