# node-red-contrib-vibration-qm42vt2
A Node-RED Node to read Turk Banner vibration and temperature sensor QM42VT2 over Modbus TCP/IP through TBEN-S2-2COM-4DXP module.
## Node-RED configurator to read Turk Banner QM42VT2 over Modbus TCP/IP through TBEN-S2-2COM-4DXP module.

## How to use

### qm42vt2 node
Use the `qm42vt2` node to configure which information you want to request from the TBEN-S2-2COM-4DXP module.

Wire the output of the `qm42vt2` to the input of the `Modbus Flex Getter`.

### converter node
Use the `converter` node to convert the values from the modbus response into human readable numbers.

Wire the second output of the `Modbus Flex Getter` to the input of the `converter`.

## Equipment Compatibility

This module has been developed and tested on:
+ Vibration and temperature sensor QM42VT2
+ Compact I/O Module for serial data transmission TBEN-S2-2COM-4DXP
