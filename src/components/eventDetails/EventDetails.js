import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Table, TableContent,TableRow, TableHeader, SmallItem, SmallButton,
         MenuList, TableBox, TableBorder, Item, ItemBlue, ItemInside, ItemS,
        ButtonBox } from "./EventDetailsStyled";
import { BsThreeDotsVertical } from 'react-icons/bs'
import { PrimaryButton} from '../../components/button/button'
// import Table from 'react-bootstrap/Table';

const EventDetails = () => {
    
  return (
    <>
    <TableBox>
        <Table>      
            <TableBorder>
                    <TableHeader>Event Details</TableHeader>
            </TableBorder>  

            <TableContent>
                <TableRow>
                    <Item>Name and Date</Item>
                    <Item>Last Updated</Item>
                    <Item>Status</Item>
                </TableRow>
            </TableContent>

            <TableContent>
                    <ItemInside>Peter's Friends and Family Hang out <br/>
                    <SmallItem>Tuesday, January 22, 2023 at 7:00 PM WAT</SmallItem>
                    </ItemInside>
                    <ItemS>14 hours ago</ItemS>
                    <ItemBlue>Draft</ItemBlue>
                    <ButtonBox>
                        <SmallButton>
                            View
                        </SmallButton>
                        <BsThreeDotsVertical />
                    </ButtonBox>
            </TableContent>   
                  
        </Table>
            <PrimaryButton style={{marginTop:'4%'}}>Create Event</PrimaryButton>
    </TableBox>
    </>
  )
}

export default EventDetails