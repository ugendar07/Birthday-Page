'use client'
import React from "react";
import { Button } from '../components/button'
import { FaBirthdayCake, FaGift } from 'react-icons/fa'
import dynamic from 'next/dynamic'
import { GiBalloons } from 'react-icons/gi'
import {motion, AnimatePresence} from 'framer-motion'
import { Card, CardDescription, CardContent,CardFooter, CardHeader, CardTitle } from '../components/card'



const Home = async() => {

    return(
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-lg"
    >
      <Card className="mx-auto overflow-hidden transition-all duration-300 ease-in-out hover:shadow-2xl rounded-lg border border-gray-200">
        <CardHeader className="text-center bg-gradient-to-br from-blue-400 to-purple-500 py-6">
          <CardTitle className="text-3xl font-extrabold text-white">Birthday Message For You</CardTitle>
           
        </CardHeader>
        <CardContent className="space-y-6 text-center p-4">
        <div>
            <h3 className="text-md font-semibold text-gray-800 mb-2">
                 
                On this Special day, I wanted to take a moment to wish you 
                the happiest and most magical birthday ever! you are truly one of the sweetest soul, I've 
                ever had the pleasure of knowing.
                and your presence in my life has been an absolute blessing.
                Your kindness, warmth and positivity light up the world around you.
                You have a heart of gold, and your smile has the power to
                brighten even the darkest of days.
                Today I hope all the love and joy you've given to others come back 
                to you in abundance. May your day be filled with laughter, 
                surrounded by friends and family who adore you just as much as I do.
                May your dreams take a flight and your aspirations be realized.
                This year, I wish for you a world of beautiful moments,
                adventures and endless happiness. Thank you for being the wonderful person 
                you are. Happy Birthday, Here's to clebrating you and all the icredable moments that lie ahead.

            </h3>
        </div>
        </CardContent>
        <CardFooter className="flex justify-center py-4">
          

        <a href="./note" className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300">
            <span className="block w-full h-full">Note</span>
        </a>  




        </CardFooter>
      </Card>
    </motion.div>
    {/* {showConfetti && (
      <DynamicConfetti
        width={windowSize.width}
        height={windowSize.height}
        recycle={false}
        numberOfPieces={500}
        colors={confettiColors}
      />
    )} */}
  </div>
    );
}

export default Home