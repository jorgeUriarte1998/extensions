import { Save } from "lucide-react";
import { useState } from "react";

export default function CredentialForm() {
    const [showApiKey, setShowApiKey] = useState(false);

    return (
        <div className="dark w-[500px]">
            <div className="flex items-center justify-center bg-gray-900 min-h-screen"> 
                <div className="w-full max-w-md space-y-8"> 
                    <div className="text-center">
                        <h2 className="text-2xl text-white font-extrabold"> 
                            API Configuration
                        </h2>
                        <p className="mt-2 text-xl text-gray-400 font-bold">
                            Enter your credentials
                        </p>
                    </div>
                    <div className="bg-gray-800 shadow-md rounded-lg p-4 mb-4">
                        <form className="space-y-2">
                            <div className="space-y-4">
                                <div>
                                    <label 
                                        htmlFor="endpoint" 
                                        className="block text-sm font-medium text-gray-400 pl-2 pb-1">
                                        Endpoint
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            id = "endpoint"
                                            name = "endpoint"
                                            type = "url"
                                            required
                                            placeholder="http://api.example.com/v1"
                                            className=" text-gray-400 p-1 rounded-md
                                                        appearance-none block w-full bg-gray-900
                                                        p-2 pl-4"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label 
                                        htmlFor="apiKey" 
                                        className="block text-sm font-medium text-gray-400 pl-2 pb-1">
                                        API Key
                                    </label>
                                    <div className="mt-1 relative">
                                        <input
                                            id = "apikey"
                                            name = "apikey"
                                            type = "password"
                                            required
                                            placeholder="Enter your API key"
                                            className=" text-gray-400 p-1 rounded-md
                                                        appearance-none block w-full bg-gray-900
                                                        p-2 pl-4"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div>
                                <button 
                                    type="submit"
                                    className="w-full flex justify-center py-2 px-3
                                                border border-transparent rounded-md
                                                bg-blue-600 hover:bg-blue-700
                                                text-white"
                                >
                                    <Save className="mr-2 h-5 w-5" aria-label="true"/>
                                    Save
                                </button>
                            </div>
                            
                        </form>                    
                    </div>
                </div>
            </div>
        </div>
    )
}
