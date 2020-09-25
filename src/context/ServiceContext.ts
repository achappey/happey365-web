import React from 'react'
import { ApiService } from '../services/apiService'

const serviceUrl = process.env.REACT_APP_API_URL;

const ServiceContext = React.createContext<ApiService>(new ApiService(serviceUrl!, async () => { return ""; }))

export const ServiceProvider = ServiceContext.Provider
export const ServiceConsumer = ServiceContext.Consumer

export default ServiceContext