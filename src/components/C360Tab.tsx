import React from "react";

interface Info {
    // 1
    nameTH: string;
    nameEN: string;
    cdpId: string;
    nationalID: string;
    status: string;
    complaintLevel: number;
    // 2
    customerGroup: string;
    customerGroupDesc: string;
    complaintGroup: string;
    customerType: string;
    memberStatus: string;
    customerSegment: string;
    // 3
    phoneNo: string;
    phoneNoDesc: string;
    callingPhone: string;
    address: string;
    gender: string;
    MaritalStatus: string;
    typeOfJob: string;
    // 4
    statementChannel: string;
    lastStatementDate: string;
    lastStatementStatus: string;
    // 5
    lastIncreaseLimit: string;
    lastReduceLimit: string;
    lastIncome: string;
    lastCardApply: string;
    // 6
    consentForCollect: string;
    consentForDisclose: string;
    blockedMedia: string;
    // 7
    suggestAction: string;
    // 8
    paymentStatus: string;
    dayPastDue: number;
    lastOverDueDate: string;
    // 9
    suggestCards: any[];
    // 10
    suggestPromotions: any[]
}

const infoMock: Info = {
    // 1
    nameTH: 'สมโชติ',
    nameEN: 'Somchot',
    cdpId: 'TESTCDP123456789',
    nationalID: '1234567890000',
    status: 'Sweetheart',
    complaintLevel: 2,
    // 2
    customerGroup: 'NORMAL',
    customerGroupDesc: 'VIP Customer',
    complaintGroup: '',
    customerType: 'VP',
    memberStatus: 'NORMAL',
    customerSegment: 'Existing Customer - Active',
    // 3
    phoneNo: '0812345678',
    phoneNoDesc: 'No update',
    callingPhone: 'value7',
    address: '183 ซ.เจริญนคร 10 ต.คลองต้นไทร อ.คลองสาน จ.กรุงเทพมหานคร 10110',
    gender: 'Male',
    MaritalStatus: 'Single',
    typeOfJob: 'BUSINESS OWNER',
    // 4
    statementChannel: 'E-statement',
    lastStatementDate: '25 Mar 2025',
    lastStatementStatus: 'ไม่สำเร็จ (Email ตีกลับ (ชั่วคราว) อาจเกิดจาก email box เต็ม Action: ดำเนินการส่งใหม่ได้)',
    // 5
    lastIncreaseLimit: '15 Feb 2025',
    lastReduceLimit: 'No Update',
    lastIncome: '15 Feb 2025',
    lastCardApply: '15 Feb 2025',
    // 6
    consentForCollect: 'Uncensent',
    consentForDisclose: 'Consent',
    blockedMedia: 'No blocked',
    // 7
    suggestAction: 'No Seggestion',
    // 8
    paymentStatus: '!Payment Overdue',
    dayPastDue: 89,
    lastOverDueDate: '25 Mar 2025',
    // 9
    suggestCards: [
        { id: 1, name: 'Club Thailand JCB Card 1' },
        { id: 2, name: 'Club Thailand JCB Card 2' },
        { id: 3, name: 'Club Thailand JCB Card 3' }
    ],
    // 10
    suggestPromotions: []
}

const C360Tabs: React.FC = () => {
    return (
        <div className="p-4 bg-primary">
            <div className="text-end mb-4 text-light">CDP data update as of <span className="fw-bold">25 Mar 2025</span></div>
            <div className="rounded-3 bg-light">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>

    );
};

export default C360Tabs;
