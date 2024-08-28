import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./nav";
import ViewAll from "./viewAll";
import SendMoney from "./sendMoney";
import TransactionHistory from "./transactions";
import Home from "./home";
import NewCustomer from "./newcustomer";
import EditCustomer from "./editcustomer";
import Transfer from "./sendmoney2";
import Login from "./Login"; // Ensure this component exists
import Register from "./Register"; // Ensure this component exists
import UpdateDetails from "./UpdateDetails"; // Ensure this component exists
import ViewCustomerDetails from "./ViewCustomerDetails"; // Ensure this component exists
import AccountOpening from "./AccountOpening"; // Ensure this component exists
import AdminTransactions from "./AdminTransactions"; // Ensure this component exists
import PerformTransactions from "./PerformTransactions"; // Ensure this component exists
import EditProfile from "./EditProfile";
function App() {
    return (
        <div>
            <Router>
                <Nav />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/view" element={<ViewAll />} />
                    <Route path="/transfer" element={<SendMoney />} />
                    <Route path="/transaction" element={<TransactionHistory />} />
                    <Route path="/new" element={<NewCustomer />} />
                    <Route path="/update" element={<EditCustomer />} />
                    <Route path="/sendmoney" element={<Transfer />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/update-details" element={<UpdateDetails />} />
                    <Route path="/view-customer" element={<ViewCustomerDetails />} />
                    <Route path="/account-opening" element={<AccountOpening />} />
                    <Route path="/admin-transactions" element={<AdminTransactions />} />
                    <Route path="/perform-transactions" element={<PerformTransactions />} />
                    <Route path="/edit-profile" element={<EditProfile />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;