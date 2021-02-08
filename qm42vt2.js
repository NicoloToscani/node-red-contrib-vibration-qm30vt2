module.exports = function(RED) {
    function qm42vt2(config) {
        RED.nodes.createNode(this,config);
        this.name = config.name;
        this.unitId = config.unitId;
        this.data = config.data;
        var node = this;
        node.on('input', function(msg) {
            var p=msg.payload;
            let settings = {
             name: p.name || node.name || "",
             unitId: p.unitId || node.unitId,
             data: p.data || node.data,
            };
            var res = {};
            switch(settings.data){
              case 0:
              case "Z-Axis-RMS-Vel-In-Sec":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 2400,
                    quantity: 2,
                    };
                res.topic = "Z-Axis-RMS-Vel-In-Sec";
                res.format = "float32";
              break;
              case 1:
              case "Z-Axis-RMS-Vel-Mm-Sec":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 2402,
                    quantity: 2,
                    };
                res.topic = "Z-Axis-RMS-Vel-Mm-Sec";
                res.format = "float32";
              break;
              case 2:
              case "Temperature-F":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 48,
                    quantity: 2,
                    };
                res.topic = "Temperature-F";
                res.format = "float32";
              break;
              case 3:
              case "Temperature-C":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 42,
                    quantity: 2,
                    };
                res.topic = "Temperature-C";
                res.format = "float32";
              break;
              case 4:
              case "X-Axis-RMS-Vel-In-Sec":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 2450,
                    quantity: 2,
                    };
                res.topic = "X-Axis-RMS-Vel-In-Sec";
                res.format = "float32";
              break;
              case 5:
              case "X-Axis-RMS-Vel-Mm-Sec":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 2452,
                    quantity: 2,
                    };
                res.topic = "X-Axis-RMS-Vel-Mm-Sec";
                res.format = "float32";
              break;
              case 6:
              case "Z-Axis-Peak-Acc":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 2406,
                    quantity: 2,
                    };
                res.topic = "Z-Axis-Peak-Acc";
                res.format = "float32";
              break;
              case 7:
              case "X-Axis-Peak-Acc":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 2456,
                    quantity: 2,
                    };
                res.topic = "X-Axis-Peak-Acc";
                res.format = "float32";
              break;
              case 8:
              case "Z-Axis-Peak-Vel":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 2404,
                    quantity: 2,
                    };
                res.topic = "Z-Axis-Peak-Vel";
                res.format = "float32";
              break;
              case 9:
              case "X-Axis-Peak-Vel":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 2454,
                    quantity: 2,
                    };
                res.topic = "X-Axis-Peak-Vel";
                res.format = "float32";
              break;
              case 10:
              case "Z-Axis-RMS-Accl":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 2405,
                    quantity: 2,
                    };
                res.topic = "Z-Axis-RMS-Accl";
                res.format = "float32";
              break;
              case 11:
              case "X-Axis-RMS-Accl":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 2455,
                    quantity: 2,
                    };
                res.topic = "X-Axis-RMS-Accl";
                res.format = "float32";
              break;
              case 12:
              case "Z-Axis-Kurtosis":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 2408,
                    quantity: 2,
                    };
                res.topic = "Z-Axis-Kurtosis";
                res.format = "float32";
              break;
              case 13:
              case "X-Axis-Kurtosis":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 2458,
                    quantity: 2,
                    };
                res.topic = "X-Axis-Kurtosis";
                res.format = "float32";
              break;
              case 14:
              case "Z-Axis-Crest-Factor":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 2407,
                    quantity: 2,
                    };
                res.topic = "Z-Axis-Crest-Factor";
                res.format = "float32";
              break;
              case 15:
              case "X-Axis-Crest-Factor":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 2457,
                    quantity: 2,
                    };
                res.topic = "X-Axis-Crest-Factor";
                res.format = "float32";
              break;
              case 16:
                case "Z-Axis-Peak-Vel-In-Sec":
                  res.payload = {
                      fc: 3,
                      unitid: settings.unitId,
                      address: 2401,
                      quantity: 2,
                      };
                  res.topic = "Z-Axis-Peak-Vel-In-Sec";
                  res.format = "float32";
                break;
              case 17:
              case "Z-Axis-Peak-Vel-mm-Sec":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 2401,
                    quantity: 2,
                    };
                res.topic = "Z-Axis-Peak-Vel-mm-Sec";
                res.format = "float32";
              break;
              case 18:
              case "X-Axis-Peak-Vel-In-Sec":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 2451,
                    quantity: 2,
                    };
                res.topic = "X-Axis-Peak-Vel-In-Sec";
                res.format = "float32";
              break;
              case 19:
              case "X-Axis-Peak-Vel-mm-Sec":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 2453,
                    quantity: 2,
                    };
                res.topic = "X-Axis-Peak-Vel-mm-Sec";
                res.format = "float32";
              break;
              case 20:
              case "Z-Axis-High-Freq-RMS-Acc":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 2409,
                    quantity: 2,
                    };
                res.topic = "Z-Axis-High-Freq-RMS-Acc";
                res.format = "float32";
              break;
              case 21:
              case "X-Axis-High-Freq-RMS-Acc":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 2459,
                    quantity: 2,
                    };
                res.topic = "X-Axis-High-Freq-RMS-Acc1";
                res.format = "float32";
              break;
              case 22:
              case "Baud":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 6100,
                    quantity: 2,
                    };
                res.topic = "Baud";
                res.format = "float32";
              break;
              case 23:
              case "Parity":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 6101,
                    quantity: 2,
                    };
                res.topic = "Parity";
                res.format = "float32";
              break;
              case 24:
              case "Address":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 6102,
                    quantity: 2,
                    };
                res.topic = "Address";
                res.format = "float32";
              break;
              case 25:
              case "Speed-RPM":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 2600,
                    quantity: 2,
                    };
                res.topic = "Speed-RPM";
                res.format = "float32";
              break;
              case 26:
              case "Speed-Hz":
                res.payload = {
                    fc: 3,
                    unitid: settings.unitId,
                    address: 2601,
                    quantity: 2,
                    };
                res.topic = "Speed-Hz";
                res.format = "float32";
              break;
              
            }
          
            node.send(res);
        });
    }
    RED.nodes.registerType("qm42vt2",qm42vt2Node);
}