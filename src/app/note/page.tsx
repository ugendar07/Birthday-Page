'use client'
import React from "react";
import { Button } from '../components/button'
import Link from "next/link.js";
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
          <CardTitle className="text-3xl font-extrabold text-white">A Small Note</CardTitle>
           
        </CardHeader>
        <CardContent className="space-y-6 text-center p-4">
        <div>
            <h3 className="text-md font-semibold text-gray-800 mb-2">
                
                Vedanth, You are the best person I know. And you deserve to be happy always. 
                But if you not, If somthing bad has happened and you wanted to tell me 
                about it I'am here. you are not alone. But if you don't want to tell me,
                it's ok it dosen't matter. I am gonna be the same. I suppose there are things 
                hard to tell even to your first and the best friend.
                
                <br></br>
                <br></br>
                Disturb me, update me, tell me how was your day, I am here 
                I like your notification.
            </h3>
        </div>
        </CardContent>
        <CardFooter className="flex justify-end font-bold text-gray-600 py-4">

            with warmth and care ~MONSTER

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