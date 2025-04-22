import React from "react";
import { useNavigate } from "react-router-dom";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "../../components/ui/card";
import { toast } from "sonner";

const Payments = () => {


    const navigate = useNavigate(); // Initialize the navigate hook

    // Function to handle payment confirmation and navigate
    const handlePaymentConfirmation = () => {
        navigate("/"); // Navigate to the success page
        toast.success('Payment successful')
    };


    return (
        <Card>
            <div className="p-6 max-w-md mx-auto space-y-4">
                <h1 className="text-2xl font-semibold mb-4">Choose Payment Method</h1>
                <RadioGroup>
                    {/* Cash on Delivery */}
                    <Sheet>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="cod" id="cod" className="cursor-pointer" />
                            <SheetTrigger asChild>
                                <Label htmlFor="cod" className="cursor-pointer">
                                    Cash on Delivery
                                </Label>
                            </SheetTrigger>
                        </div>
                        <SheetContent>
                            <SheetHeader>
                                <SheetTitle>Confirm Cash on Delivery</SheetTitle>
                            </SheetHeader>
                            <Button className="mt-6"  onClick={handlePaymentConfirmation}>Confirm Order</Button>
                        </SheetContent>
                    </Sheet>

                    {/* Credit Card */}
                    <Sheet>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="credit" id="credit" className="cursor-pointer" />
                            <SheetTrigger asChild>

                                <Label htmlFor="credit" className="ml-2 cursor-pointer">
                                    Credit Card
                                </Label>

                            </SheetTrigger>
                        </div>
                        <SheetContent>
                            <SheetHeader>
                                <SheetTitle>Enter Credit Card Details</SheetTitle>
                            </SheetHeader>
                            <div className="space-y-4 mt-4">
                                <Input placeholder="Card Number" />
                                <Input placeholder="Validity (MM/YY)" />
                                <Input placeholder="CVV" type="password" />
                                <Button className="mt-2"  onClick={handlePaymentConfirmation}>Pay</Button>
                            </div>
                        </SheetContent>
                    </Sheet>

                    {/* Debit Card */}
                    <Sheet>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="debit" id="debit" className="cursor-pointer" />
                            <SheetTrigger asChild>

                                <Label htmlFor="debit" className="ml-2 cursor-pointer">
                                    Debit Card
                                </Label>

                            </SheetTrigger>
                        </div>
                        <SheetContent>
                            <SheetHeader>
                                <SheetTitle>Enter Debit Card Details</SheetTitle>
                            </SheetHeader>
                            <div className="space-y-4 mt-4">
                                <Input placeholder="Card Number" />
                                <Input placeholder="Validity (MM/YY)" />
                                <Input placeholder="CVV" type="password" />
                                <Button className="mt-2"  onClick={handlePaymentConfirmation}>Pay</Button>
                            </div>
                        </SheetContent>
                    </Sheet>

                    {/* QR Code */}
                    <Sheet>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="qr" id="qr" className="cursor-pointer" />
                            <SheetTrigger asChild>

                                <Label htmlFor="qr" className="ml-2 cursor-pointer">
                                    QR Code
                                </Label>

                            </SheetTrigger>
                        </div>
                        <SheetContent>
                            <SheetHeader>
                                <SheetTitle>Scan QR Code to Pay</SheetTitle>
                            </SheetHeader>
                            <div className="mt-4 flex justify-center">
                                <img
                                    src="/path-to-qr-code.png"
                                    alt="QR Code"
                                    className="w-48 h-48 object-contain"
                                />
                            </div>
                            <Button className="mt-2"  onClick={handlePaymentConfirmation}>Done</Button>
                        </SheetContent>
                    </Sheet>
                </RadioGroup>
            </div>
        </Card>
    );
};


export default Payments;