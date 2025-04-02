import React from "react";
import { Row, Col } from "react-bootstrap";

interface Info {
    // card 1
    nameTH: string;
    nameEN: string;
    cdpId: string;
    nationalID: string;
    status: string;
    complaintLevel: number;
    // card 2
    customerGroup: string;
    customerGroupDesc: string;
    complaintGroup: string;
    customerType: string;
    memberStatus: string;
    customerSegment: string;
    // card 3
    phoneNo: string;
    phoneNoDesc: string;
    callingPhone: string;
    address: string;
    gender: string;
    MaritalStatus: string;
    typeOfJob: string;
    // card 4
    statementChannel: string;
    lastStatementSentDate: string;
    statementSentStatus: string;
    // card 5
    lastIncreaseLimit: string;
    lastReduceLimit: string;
    lastIncome: string;
    lastCardApply: string;
    // card 6
    consentForCollect: string;
    consentForDisclose: string;
    blockedMedia: string;
    // card 7
    suggestAction: string;
    // card 8
    paymentStatus: string;
    dayPastDue: number;
    lastOverDueDate: string;
    // card 9
    suggestCards: any[];
    // card 10
    suggestPromotions: any[]
}

const infoMock: Info = {
    // card 1
    nameTH: 'สมโชติ',
    nameEN: 'Somchot',
    cdpId: 'TESTCDP123456789',
    nationalID: '1234567890000',
    status: 'Sweetheart',
    complaintLevel: 2,
    // card 2
    customerGroup: 'NORMAL',
    customerGroupDesc: 'VIP Customer',
    complaintGroup: '',
    customerType: 'VP',
    memberStatus: 'NORMAL',
    customerSegment: 'Existing Customer - Active',
    // card 3
    phoneNo: '0812345678',
    phoneNoDesc: 'No update',
    callingPhone: 'value7',
    address: '183 ซ.เจริญนคร 10 ต.คลองต้นไทร อ.คลองสาน จ.กรุงเทพมหานคร 10110',
    gender: 'Male',
    MaritalStatus: 'Single',
    typeOfJob: 'BUSINESS OWNER',
    // card 4
    statementChannel: 'E-statement',
    lastStatementSentDate: '25 Mar 2025',
    statementSentStatus: 'ไม่สำเร็จ (Email ตีกลับ (ชั่วคราว) อาจเกิดจาก email box เต็ม Action: ดำเนินการส่งใหม่ได้)',
    // card 5
    lastIncreaseLimit: '15 Feb 2025',
    lastReduceLimit: 'No Update',
    lastIncome: '15 Feb 2025',
    lastCardApply: '15 Feb 2025',
    // card 6
    consentForCollect: 'Uncensent',
    consentForDisclose: 'Consent',
    blockedMedia: 'No blocked',
    // card 7
    suggestAction: 'No Seggestion',
    // card 8
    paymentStatus: '!Payment Overdue',
    dayPastDue: 89,
    lastOverDueDate: '',
    // card 9
    suggestCards: [
        { id: 1, name: 'Club Thailand JCB Card 1' },
        { id: 2, name: 'Club Thailand JCB Card 2' },
        { id: 3, name: 'Club Thailand JCB Card 3' }
    ],
    // card 10
    suggestPromotions: []
}

const C360Tabs: React.FC = () => {
    return (
        <div className="p-4 bg-primary d-flex flex-column gap-3">
            <div className="text-end text-light">CDP data update as of <span className="fw-bold">25 Mar 2025</span></div>
            {/* card 1 */}
            <Row className="rounded-3 bg-light gx-0 p-4">
                <div className="col-9 text-start fw-bold">
                    <div>{infoMock.nameTH} {infoMock.cdpId}</div>
                    <div>{infoMock.nameEN} {infoMock.cdpId}</div>
                    <div>National ID: {infoMock.nationalID}</div>
                </div>
                <div className="col-3 text-start fw-bold text-center">
                    <div>{infoMock.status}</div>
                    <div className="rounded-4 text-light bg-warning">Complaint Level: {infoMock.complaintLevel}</div>
                </div>
            </Row>
            {/* card 2 */}
            <div className="rounded-3 bg-light p-4 text-start">
                <Row>
                    <div className="col-4 fw-bold">Customer Group:</div>
                    <div className="col-8">{infoMock.customerGroup}</div>
                </Row>
                <Row>
                    <div className="col-4 fw-bold">Complaint Group:</div>
                    <div className="col-8">{infoMock.complaintGroup}</div>
                </Row>
                <Row>
                    <div className="col-4 fw-bold">Customer Type:</div>
                    <div className="col-8">{infoMock.customerType}</div>
                </Row>
                <Row>
                    <div className="col-4 fw-bold">Member Status:</div>
                    <div className="col-8">{infoMock.memberStatus}</div>
                </Row>
                <Row>
                    <div className="col-4 fw-bold">Customer Segment:</div>
                    <div className="col-8">{infoMock.customerSegment}</div>
                </Row>
            </div>
            {/* card 3 */}
            <div className="rounded-3 bg-light p-4 text-start">
                <Row>
                    <div className="col-4 fw-bold">Phone No.:</div>
                    <div className="col-8">{infoMock.phoneNo}</div>
                </Row>
                <Row>
                    <div className="col-4 fw-bold">Calling phone:</div>
                    <div className="col-8">{infoMock.callingPhone}</div>
                </Row>
                <Row>
                    <div className="col-4 fw-bold">Mail-to-Office:</div>
                    <div className="col-8">{infoMock.address}</div>
                </Row>
                <Row>
                    <div className="col-4 fw-bold">Gender:</div>
                    <div className="col-8">{infoMock.gender}</div>
                </Row>
                <Row>
                    <div className="col-4 fw-bold">Marital Status:</div>
                    <div className="col-8">{infoMock.MaritalStatus}</div>
                </Row>
                <Row>
                    <div className="col-4 fw-bold">Type of Job:</div>
                    <div className="col-8">{infoMock.typeOfJob}</div>
                </Row>
            </div>
            {/* card 4 */}
            <div className="rounded-3 bg-light p-4 text-start">
                <Row>
                    <div className="col-4 fw-bold">Statement Channel:</div>
                    <div className="col-8">{infoMock.statementChannel}</div>
                </Row>
                <Row>
                    <div className="col-4 fw-bold">Last e-statement sent date:</div>
                    <div className="col-8">{infoMock.lastStatementSentDate}</div>
                </Row>
                <Row>
                    <div className="col-4 fw-bold">E-statement sent status:</div>
                    <div className="col-8">{infoMock.statementSentStatus}</div>
                </Row>
            </div>
            {/* card 5 */}
            <div className="rounded-3 bg-light p-4 text-start">
                <Row>
                    <div className="col-4 fw-bold">Last Increase limit Update:</div>
                    <div className="col-8">{infoMock.lastIncreaseLimit}</div>
                </Row>
                <Row>
                    <div className="col-4 fw-bold">Last Reduce limit Update:</div>
                    <div className="col-8">{infoMock.lastReduceLimit}</div>
                </Row>
                <Row>
                    <div className="col-4 fw-bold">Last Income Update:</div>
                    <div className="col-8">{infoMock.lastIncome}</div>
                </Row>
                <Row>
                    <div className="col-4 fw-bold">Last Card Apply Date:</div>
                    <div className="col-8">{infoMock.lastCardApply}</div>
                </Row>
            </div>
            {/* card 6 */}
            <div className="rounded-3 bg-light p-4 text-start">
                <Row>
                    <div className="col-4 fw-bold">Consent for collect & use:</div>
                    <div className="col-8">{infoMock.consentForCollect}</div>
                </Row>
                <Row>
                    <div className="col-4 fw-bold">Consent for disclose:</div>
                    <div className="col-8">{infoMock.consentForDisclose}</div>
                </Row>
                <Row>
                    <div className="col-4 fw-bold">Blocked Media:</div>
                    <div className="col-8">{infoMock.blockedMedia}</div>
                </Row>
            </div>
            {/* card 7 */}
            <div className="rounded-3 bg-warning p-4">
                <div className="fw-bold">Suggest Action</div>
                <div>{infoMock.suggestAction}</div>
            </div>
            {/* card 8 */}
            <div className="rounded-3 bg-light p-4">
                <div className="fw-bold">Payment Status: <span className="text-success">{infoMock.paymentStatus}</span></div>
                <div className="d-flex justify-content-center gap-5">
                    <div ><span className="fw-bold">Day Past Due: </span >{infoMock.dayPastDue} days</div>
                    <div ><span className="fw-bold">Last Overdue Date: </span >{infoMock.lastOverDueDate || '-'}</div>
                </div>
            </div>
            {/* card 9, 10 */}
            <Row className=" gx-0">
                 {/* card 9*/}
                <div className="col-4 rounded-3 bg-light p-4 text-start">
                    <div className="fw-bold">Suggested Cards</div>
                    <div>
                        {infoMock.suggestCards.map(card => (
                            <div key={card.id}>{card.name}</div>
                        ))}
                    </div>
                </div>
                 {/* card 10 */}
                <div className="col-8 rounded-3 bg-light p-4 text-start">
                    <div className="fw-bold">Suggested Promotions</div>
                </div>
            </Row>
        </div>

    );
};

export default C360Tabs;
