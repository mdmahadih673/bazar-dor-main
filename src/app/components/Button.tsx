
"use client"

import {  Button, } from '@heroui/react';
import Link from 'next/link';

const ButtonsPage = () => {


    return (
        <div className="ml-auto flex items-center gap-2 sm:gap-3">
            <div>
                <Link href={'/sign-in'}>
                    <Button
                        variant="ghost"
                    >
                        Sign In
                    </Button>
                </Link>

                <Link href={'/sign-up'}>
                    <Button
                        variant="danger"
                        className="rounded-md bg-red-700 px-4 font-medium text-white hover:bg-red-800"
                    >
                        Sign Up
                    </Button>
                </Link>
            </div>
        </div >
    );
};

export default ButtonsPage;