'use client'
import React from 'react'
import { useState, useEffect } from 'react'
import Link from "next/link.js";
import { Button } from './button'
import { FaBirthdayCake, FaGift } from 'react-icons/fa'
import dynamic from 'next/dynamic'
import { GiBalloons } from 'react-icons/gi'
import {motion, AnimatePresence} from 'framer-motion'
import { Card, CardDescription, CardContent,CardFooter, CardHeader, CardTitle } from './card'
// import Message from "./message"
// import Confetti from 'react-confetti/dist/types/Confetti'


const BirthdayPage = () => {
  
  type ConfettiProps = {
      width:number
      height:number
  }
  //dynamic variables
  // const DynamicConfetti = dynamic(() => import ( 'react-confetti' ), { ssr: false})
  const DynamicConfetti = dynamic(() => import ('react-confetti'), { ssr: false })
// const DynamicConfetti = dynamic(() => import('react-confetti'), { ssr: false });

//balloonsPoppedCount

const[candlesLight, setCandleLights] = useState <number> (0)
const[balloonsPopedCount, setBalloonsPoppedCount] = useState <number> (0)
const[showConfetti, setShowConfetti] = useState <boolean> (false)
const[windowSize, setWindowSize] = useState <ConfettiProps> ({width:0, height: 0})
const[celebrating, setCelebrating] = useState <boolean> (false)

// const candleColors = ['red', orange, 'purple', 'blue', ]
const candleColors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8']
const balloonColors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8']
const confettiColors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8', '#F7DC6F', '#BB8FCE']

const totalCandles:number  = 5
const totalBalloons:number  = 5

useEffect(() => {
  const handleResize = () => {
    setWindowSize({width: window.innerWidth, height: window.innerHeight})
  }
  handleResize();
  window.addEventListener ('resize', handleResize)

},[])

useEffect (() => {
  if (candlesLight === totalCandles && balloonsPopedCount === totalBalloons) {
    setShowConfetti(true)
    
  }
}, [candlesLight, balloonsPopedCount])

// birthday function

const lightCandle = (index:number) => {
  if (index === candlesLight ) {
    setCandleLights(prev => prev + 1)
  }
}

const popBallon = (index:number) => {
  if (index === balloonsPopedCount) {
    setBalloonsPoppedCount(prev => prev + 1)
    
  }

}

const celebrate = () => {
  setShowConfetti(true)
  setCelebrating(true)
  const interval = setInterval(() => {
    setCandleLights(prev => {
      if (prev < totalCandles) return prev + 1
      clearInterval(interval)
      return prev
    })
  }, 500)
}

return (
  <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-lg"
    >
      <Card className="mx-auto overflow-hidden transition-all duration-300 ease-in-out hover:shadow-2xl rounded-lg border border-gray-200">
        <CardHeader className="text-center bg-gradient-to-br from-blue-400 to-purple-500 py-6">
          <CardTitle className="text-3xl font-extrabold text-white">
          <p>
              <span className='text-gray-300 text-5xl'>H</span>
              <span className='text-gray-300 text-3xl'>A</span>
              <span className='text-gray-300 text-3xl'>P</span>
              <span className='text-gray-300 text-3xl'>P</span>
              <span className='text-gray-300 text-3xl'>Y </span>
              <span className='text-gray-300 text-5xl'> B</span>
              <span className='text-gray-300 text-3xl'>I</span>
              <span className='text-gray-300 text-3xl'>R</span>
              <span className='text-gray-300 text-3xl'>T</span>
              <span className='text-gray-300 text-3xl'>H</span>
              <span className='text-gray-300 text-3xl'>D</span>
              <span className='text-gray-300 text-3xl'>A</span>
              <span className='text-gray-300 text-3xl'>Y</span>
              
            </p>
          </CardTitle>
          {/* <CardDescription className="text-2xl font-medium text-gray-200">BINDU</CardDescription> */}
          {/* <p className="text-md text-gray-100">on 5th July </p> */}
          <p className="text-2xl font-medium text-gray-200">
            BINDU 
          </p>
        </CardHeader>
        <CardContent className="space-y-6 text-center p-4">
          <div>
            <h3 className="text-md font-semibold text-gray-800 mb-2">Light the candles:</h3>
            <div className="flex justify-center space-x-3">
              {[...Array(totalCandles)].map((_, index) => (
                <AnimatePresence key={index}>
                  {(celebrating && index <= candlesLight) || (!celebrating && index < candlesLight) ? (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      transition={{ duration: 0.5, delay: celebrating ? index * 0.5 : 0 }}
                    >
                      <FaBirthdayCake
                        className={`w-10 h-10 transition-all duration-300 ease-in-out cursor-pointer hover:scale-125`}
                        style={{ color: candleColors[index % candleColors.length] }}
                        onClick={() => lightCandle(index)}
                      />
                    </motion.div>
                  ) : (
                    <FaBirthdayCake
                      className="w-10 h-10 text-gray-300 transition-all duration-300 ease-in-out cursor-pointer hover:scale-125"
                      onClick={() => lightCandle(index)}
                    />
                  )}
                </AnimatePresence>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-md font-semibold text-gray-800 mb-2">Pop the balloons:</h3>
            <div className="flex justify-center space-x-3">
              {[...Array(totalBalloons)].map((_, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 1 }}
                  animate={{ scale: index < balloonsPopedCount ? 0 : 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <GiBalloons
                    className="w-10 h-10 cursor-pointer hover:scale-125"
                    style={{ color: index < balloonsPopedCount ? '#E5E7EB' : balloonColors[index % balloonColors.length] }}
                    onClick={() => popBallon(index)}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center py-4">

          {!celebrating ? (
          <Button
            className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300"
            onClick={celebrate}
            // disabled={celebrating}
          >
            Celebrate! <FaGift className="ml-2 h-5 w-5" />
          </Button>) : (




          <a href="./message" className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300">
            <span className="block w-full h-full">Message</span>
          </a> )}



        </CardFooter>
      </Card>
    </motion.div>
    {showConfetti && (
      <DynamicConfetti
        width={windowSize.width}
        height={windowSize.height}
        recycle={false}
        numberOfPieces={500}
        colors={confettiColors}
      />
    )}
  </div>
);

  }
  


export default BirthdayPage