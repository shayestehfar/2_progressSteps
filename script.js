'use strict'

//  get elements
const progress = document.querySelector('.progress-bar')
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
const circles = document.querySelectorAll('.circle')

// event listeners
let currentActive = 1
next.addEventListener('click', () => {
  currentActive++
  if (currentActive > circles.length) {
    currentActive = circles.length
  }
  updateDom()
})
prev.addEventListener('click', () => {
  currentActive--
  if (currentActive < 1) {
    currentActive = 1
  }
  updateDom()
})

/// function to update DOM

const updateDom = function () {
  //  add /remove class active to/from circles
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add('active')
    } else {
      circle.classList.remove('active')
    }
  })

  // calculate the width of progress-bar based on the active and circle state

  const actives = document.querySelectorAll('.active')
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + `%`

  // disable/enable prev/next button
  if (currentActive === 1) {
    prev.disabled = true
  } else if (currentActive === circles.length) {
    next.disabled = true
  } else {
    prev.disabled = false
    next.disabled = false
  }
}
