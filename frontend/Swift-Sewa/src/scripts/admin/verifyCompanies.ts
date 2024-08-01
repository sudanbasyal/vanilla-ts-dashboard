export class AdminDashboardVerifyUsers {
    static adminDashboardVerifyUsers: () => void = async () => {
        const users = document.getElementById('users') as HTMLButtonElement;
        console.log(users)
users.onclick = () => {
    window.location.href = '#/admin/dashboard/users';
}
const swiftSewa = document.getElementById('swift-sewa') as HTMLButtonElement;
swiftSewa.onclick=()=>{
    window.location.href ='#/admin/dashboard'
}
const companyInfo = document.getElementById('company-info') as HTMLButtonElement;
companyInfo.onclick=()=>{
    window.location.href ='#/admin/dashboard/company-info'
}
}}

// Invoke the method to set everything up

