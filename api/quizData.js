export default function handler(req, res) {
  const quizData = [
    {
      question: "What is the substrate of a magnetic disk typically made of?",
      options: ["Plastic", "Aluminum or its alloy", "Glass", "Copper"],
      correctAnswer: "Aluminum or its alloy",
    },
    {
      question:
        "What is a primary advantage of glass substrate in magnetic disks?",
      options: [
        "Increased weight",
        "Reduced uniformity",
        "Improved reliability",
        "Increased cost",
      ],
      correctAnswer: "Improved reliability",
    },
    {
      question:
        "What are the concentric rings on a magnetic disk platter called?",
      options: ["Sectors", "Cylinders", "Tracks", "Clusters"],
      correctAnswer: "Tracks",
    },
    {
      question:
        "What is the term for the time it takes to position the head at the correct track?",
      options: [
        "Rotational delay",
        "Seek time",
        "Transfer time",
        "Access time",
      ],
      correctAnswer: "Seek time",
    },
    {
      question: "What mechanism writes data onto a magnetic disk?",
      options: [
        "Optical reader",
        "Conducting coil",
        "Magnetic strip",
        "Rotating laser",
      ],
      correctAnswer: "Conducting coil",
    },
    {
      question: "What does RAID stand for?",
      options: [
        "Random Access Independent Disks",
        "Redundant Array of Independent Disks",
        "Reliable Automated Input Devices",
        "Readily Accessible Input Devices",
      ],
      correctAnswer: "Redundant Array of Independent Disks",
    },
    {
      question: "Which RAID level provides no redundancy?",
      options: ["RAID 1", "RAID 3", "RAID 0", "RAID 5"],
      correctAnswer: "RAID 0",
    },
    {
      question: "What is the purpose of parity information in RAID?",
      options: [
        "Increase speed",
        "Recover data in case of failure",
        "Reduce storage costs",
        "Backup data",
      ],
      correctAnswer: "Recover data in case of failure",
    },
    {
      question: "How is data distributed in a RAID system?",
      options: ["Clustering", "Partitioning", "Striping", "Mirroring"],
      correctAnswer: "Striping",
    },
    {
      question: "What is a key benefit of RAID?",
      options: [
        "Simplified hardware",
        "Increased disk failure rates",
        "Increased I/O performance",
        "Reduced data redundancy",
      ],
      correctAnswer: "Increased I/O performance",
    },
    {
      question: "What does SSD stand for?",
      options: [
        "Super Storage Device",
        "Solid State Drive",
        "Systematic Storage Disk",
        "Sequential Storage Drive",
      ],
      correctAnswer: "Solid State Drive",
    },
    {
      question: "What type of memory is used in SSDs?",
      options: ["DRAM", "Flash memory", "ROM", "SRAM"],
      correctAnswer: "Flash memory",
    },
    {
      question: "Which component in an SSD provides device-level interfacing?",
      options: ["Cache", "Controller", "Data buffer", "NAND chip"],
      correctAnswer: "Controller",
    },
    {
      question: "Which of the following is an advantage of SSD over HDD?",
      options: [
        "Higher power consumption",
        "More susceptibility to shocks",
        "Lower latency",
        "Reduced lifespan",
      ],
      correctAnswer: "Lower latency",
    },
    {
      question: "How do SSDs achieve higher speeds than HDDs?",
      options: [
        "Using mechanical parts",
        "Using high-speed RAM buffers",
        "Employing magnetic strips",
        "Reducing circuit complexity",
      ],
      correctAnswer: "Using high-speed RAM buffers",
    },
    {
      question: "What material is used for the base of optical disks?",
      options: ["Glass", "Polycarbonate", "Plastic", "Aluminum"],
      correctAnswer: "Polycarbonate",
    },
    {
      question: "Which coating is applied to optical disks for reflectivity?",
      options: ["Polyethylene", "Gold or aluminum", "Iron", "Copper"],
      correctAnswer: "Gold or aluminum",
    },
    {
      question: "What creates the pits on an optical disk?",
      options: [
        "Magnetic coil",
        "Focused laser",
        "Mechanical etching",
        "Chemical reactions",
      ],
      correctAnswer: "Focused laser",
    },
    {
      question: "What protects the reflective surface of optical disks?",
      options: [
        "Polycarbonate sheet",
        "Acrylic top coat",
        "Silicon sealant",
        "Transparent glue",
      ],
      correctAnswer: "Acrylic top coat",
    },
    {
      question: "What is a common use of optical disks?",
      options: [
        "Storing volatile data",
        "Archiving music or computer files",
        "Capturing live data streams",
        "Running mechanical systems",
      ],
      correctAnswer: "Archiving music or computer files",
    },
    {
      question: "Why are peripherals not directly connected to the system bus?",
      options: [
        "Lack of compatibility",
        "High data transfer speeds",
        "Varied data formats and mismatched speeds",
        "Limited memory space",
      ],
      correctAnswer: "Varied data formats and mismatched speeds",
    },
    {
      question: "What is an I/O module's primary function?",
      options: [
        "Managing power supply",
        "Acting as an interface between processor and peripherals",
        "Data formatting",
        "Increasing processor speed",
      ],
      correctAnswer: "Acting as an interface between processor and peripherals",
    },
    {
      question: "Which command is used to test an I/O module's status?",
      options: ["Read", "Write", "Control", "Test"],
      correctAnswer: "Test",
    },
    {
      question: "What does an I/O module's write command do?",
      options: [
        "Transfers data from memory to buffer",
        "Sends data from processor to peripheral",
        "Reads data from peripheral",
        "Formats the device",
      ],
      correctAnswer: "Sends data from processor to peripheral",
    },
    {
      question:
        "Which standard interface is commonly used for slow-speed devices?",
      options: ["Ethernet", "USB", "Thunderbolt", "PCI Express"],
      correctAnswer: "USB",
    },
    {
      question:
        "What is the term for the time it takes for the correct sector to align with the read/write head?",
      options: [
        "Access time",
        "Transfer time",
        "Rotational latency",
        "Seek time",
      ],
      correctAnswer: "Rotational latency",
    },
    {
      question:
        "What are the components used to perform read and write operations on a magnetic disk?",
      options: ["Motors", "Coils", "Magnetic plates", "Rotors"],
      correctAnswer: "Coils",
    },
    {
      question: "What determines the storage density of a magnetic disk?",
      options: [
        "Number of tracks",
        "Number of sectors per track",
        "Disk diameter",
        "Disk rotation speed",
      ],
      correctAnswer: "Number of sectors per track",
    },
    {
      question:
        "Which of the following is a major factor affecting disk performance?",
      options: ["Disk material", "Seek time", "Coating thickness", "Data type"],
      correctAnswer: "Seek time",
    },
    {
      question:
        "What type of head design is used in modern rigid disk systems?",
      options: [
        "Dual sensor head",
        "Magnetoresistive head",
        "Single surface head",
        "Optical sensor",
      ],
      correctAnswer: "Magnetoresistive head",
    },
    {
      question: "Which RAID level mirrors data across two disks?",
      options: ["RAID 0", "RAID 1", "RAID 5", "RAID 6"],
      correctAnswer: "RAID 1",
    },
    {
      question: "Which RAID level combines striping and parity?",
      options: ["RAID 1", "RAID 2", "RAID 5", "RAID 10"],
      correctAnswer: "RAID 5",
    },
    {
      question: "What is the primary drawback of RAID systems?",
      options: [
        "Increased redundancy",
        "Increased cost",
        "Lower performance",
        "High latency",
      ],
      correctAnswer: "Increased cost",
    },
    {
      question: "Which RAID level offers the highest fault tolerance?",
      options: ["RAID 0", "RAID 5", "RAID 6", "RAID 1"],
      correctAnswer: "RAID 6",
    },
    {
      question:
        "What is the term for the logical arrangement of data across multiple drives in RAID?",
      options: ["Redundancy", "Striping", "Mirroring", "Partitioning"],
      correctAnswer: "Striping",
    },
    {
      question: "Which of the following is NOT a feature of SSDs?",
      options: [
        "Mechanical components",
        "Higher durability",
        "Lower power consumption",
        "Faster access time",
      ],
      correctAnswer: "Mechanical components",
    },
    {
      question: "What is the typical lifespan of an SSD measured in?",
      options: [
        "Access cycles",
        "Write/erase cycles",
        "Rotational latency",
        "Read operations",
      ],
      correctAnswer: "Write/erase cycles",
    },
    {
      question: "What is the main disadvantage of SSDs compared to HDDs?",
      options: [
        "Lower speed",
        "Higher cost",
        "Greater power usage",
        "Reduced portability",
      ],
      correctAnswer: "Higher cost",
    },
    {
      question:
        "What type of NAND is typically used in SSDs for consumer-grade devices?",
      options: ["DRAM", "SLC", "TLC", "MLC"],
      correctAnswer: "TLC",
    },
    {
      question: "What does an SSD controller primarily manage?",
      options: [
        "Electrical current flow",
        "Data read/write operations",
        "Hardware cooling",
        "Physical wear and tear",
      ],
      correctAnswer: "Data read/write operations",
    },
    {
      question: "What is the function of the pits in optical memory?",
      options: [
        "Reflect light for data reading",
        "Absorb heat",
        "Store electrical charges",
        "Secure the disk coating",
      ],
      correctAnswer: "Reflect light for data reading",
    },
    {
      question:
        "Which type of laser is used for high-density optical disks like Blu-ray?",
      options: [
        "Red laser",
        "Infrared laser",
        "Blue-violet laser",
        "Ultraviolet laser",
      ],
      correctAnswer: "Blue-violet laser",
    },
    {
      question: "What layer protects the data on an optical disk?",
      options: [
        "Aluminum film",
        "Acrylic coat",
        "Magnetic strip",
        "Polycarbonate plate",
      ],
      correctAnswer: "Acrylic coat",
    },
    {
      question: "Which optical disk technology allows rewriting of data?",
      options: ["CD-ROM", "CD-R", "CD-RW", "DVD"],
      correctAnswer: "CD-RW",
    },
    {
      question:
        "What is the main advantage of optical disks over magnetic storage?",
      options: [
        "Larger storage",
        "Higher durability",
        "Faster access time",
        "Lower cost",
      ],
      correctAnswer: "Higher durability",
    },
    {
      question: "Which type of data format mismatch is common in I/O systems?",
      options: ["Word size", "Disk format", "File type", "Transfer protocol"],
      correctAnswer: "Word size",
    },
    {
      question: "What is the function of data buffering in I/O modules?",
      options: [
        "Enhance data security",
        "Smooth data transfer",
        "Decode data",
        "Compress data",
      ],
      correctAnswer: "Smooth data transfer",
    },
    {
      question:
        "What is the common data transfer rate standard for high-speed devices?",
      options: ["USB 2.0", "USB 3.1", "SATA", "Ethernet"],
      correctAnswer: "USB 3.1",
    },
    {
      question:
        "Which external connection standard is used for connecting external hard drives?",
      options: ["Wi-Fi", "Thunderbolt", "FireWire", "USB"],
      correctAnswer: "Thunderbolt",
    },
    {
      question: "What is the primary role of error detection in I/O systems?",
      options: [
        "Improve transfer speed",
        "Ensure data integrity",
        "Encode the data",
        "Increase storage capacity",
      ],
      correctAnswer: "Ensure data integrity",
    },
    {
      question: "Which architecture focuses on hardware optimization?",
      options: ["RISC", "CISC", "Both", "Neither"],
      correctAnswer: "CISC",
    },
    {
      question: "What is a key feature of RISC architecture?",
      options: [
        "Complex instruction decoding",
        "Single instruction per cycle",
        "Variable instruction length",
        "Fewer registers",
      ],
      correctAnswer: "Single instruction per cycle",
    },
    {
      question: "What does the term 'pipeline' refer to in RISC processors?",
      options: [
        "Faster memory access",
        "Instruction overlap during execution",
        "Use of multiple processors",
        "Fault tolerance",
      ],
      correctAnswer: "Instruction overlap during execution",
    },
    {
      question: "Which architecture is better suited for embedded systems?",
      options: ["RISC", "CISC", "Both", "Neither"],
      correctAnswer: "RISC",
    },
    {
      question: "What is a primary drawback of CISC architecture?",
      options: [
        "Limited addressing modes",
        "Inefficient instruction execution",
        "Fewer data types",
        "Lower power consumption",
      ],
      correctAnswer: "Inefficient instruction execution",
    },
    {
      question: "Which of the following is an example of an assembly command?",
      options: ["ADD", "PRINT", "LOOP", "IF"],
      correctAnswer: "ADD",
    },
    {
      question: "What does an assembler do?",
      options: [
        "Executes high-level programs",
        "Converts assembly code to machine code",
        "Debugs the processor",
        "Formats storage",
      ],
      correctAnswer: "Converts assembly code to machine code",
    },
    {
      question:
        "Which is a key advantage of assembly language over high-level languages?",
      options: [
        "Easier to write",
        "Portability",
        "Lower memory usage",
        "Simple syntax",
      ],
      correctAnswer: "Lower memory usage",
    },
    {
      question: "What is the role of registers in assembly language?",
      options: [
        "Hold data temporarily for operations",
        "Store large datasets",
        "Format code",
        "Manage power usage",
      ],
      correctAnswer: "Hold data temporarily for operations",
    },
    {
      question: "What is a common use of assembly language?",
      options: [
        "Writing operating systems",
        "Web development",
        "High-performance graphics",
        "Designing websites",
      ],
      correctAnswer: "Writing operating systems",
    },
    {
      question: "What is a parity bit used for in data storage?",
      options: [
        "Increase memory capacity",
        "Detect errors",
        "Speed up data access",
        "Compress data",
      ],
      correctAnswer: "Detect errors",
    },
    {
      question: "What is the primary purpose of fault tolerance?",
      options: [
        "Increase system performance",
        "Operate despite component failures",
        "Reduce cost",
        "Improve portability",
      ],
      correctAnswer: "Operate despite component failures",
    },
    {
      question: "What is the smallest unit of data in computer storage?",
      options: ["Byte", "Bit", "Word", "Sector"],
      correctAnswer: "Bit",
    },
    {
      question: "What size is a doubleword in modern computing?",
      options: ["8 bytes", "32 bits", "64 bits", "16 bytes"],
      correctAnswer: "32 bits",
    },
    {
      question: "Which type of memory uses ECC for error correction?",
      options: ["Virtual memory", "RAM", "ROM", "Flash memory"],
      correctAnswer: "RAM",
    },
    {
      question:
        "Which standard is primarily used for high-speed local networks?",
      options: ["USB", "SATA", "Ethernet", "Wi-Fi"],
      correctAnswer: "Ethernet",
    },
    {
      question:
        "Which version of USB supports data transfer rates up to 10 Gbps?",
      options: ["USB 1.0", "USB 2.0", "USB 3.1", "USB 4.0"],
      correctAnswer: "USB 3.1",
    },
    {
      question: "What topology does USB use to connect devices?",
      options: ["Star", "Tree", "Ring", "Mesh"],
      correctAnswer: "Tree",
    },
    {
      question: "What does SATA stand for?",
      options: [
        "Serial Access Transfer Algorithm",
        "Serial Advanced Technology Attachment",
        "Standardized Array Transfer Access",
        "Scalable Advanced Transfer Architecture",
      ],
      correctAnswer: "Serial Advanced Technology Attachment",
    },
    {
      question:
        "Which is the latest version of PCI Express used for high-speed connectivity?",
      options: ["PCIe 2.0", "PCIe 3.0", "PCIe 4.0", "PCIe 5.0"],
      correctAnswer: "PCIe 4.0",
    },
    {
      question:
        "What is the term for the time required to read/write data once the head is in position?",
      options: [
        "Rotational latency",
        "Seek time",
        "Access time",
        "Transfer time",
      ],
      correctAnswer: "Transfer time",
    },
    {
      question:
        "Which type of magnetic disk head detects resistance changes caused by magnetic fields?",
      options: [
        "Optical sensor",
        "Magnetoresistive head",
        "Dual-layer head",
        "Static coil head",
      ],
      correctAnswer: "Magnetoresistive head",
    },
    {
      question: "What unit measures disk performance?",
      options: [
        "Bytes per second",
        "Input/output operations per second (IOPS)",
        "Megabytes per track",
        "Rotations per second",
      ],
      correctAnswer: "Input/output operations per second (IOPS)",
    },
    {
      question: "What happens if a magnetic disk has surface defects?",
      options: [
        "Decreased read-write errors",
        "Increased read-write errors",
        "Faster access times",
        "Enhanced durability",
      ],
      correctAnswer: "Increased read-write errors",
    },
    {
      question: "What innovation improved magnetic disk reliability?",
      options: [
        "Single-layer coating",
        "Glass substrate",
        "Aluminum alloy",
        "Reduced track density",
      ],
      correctAnswer: "Glass substrate",
    },
    {
      question: "Which RAID level uses distributed parity across drives?",
      options: ["RAID 1", "RAID 5", "RAID 6", "RAID 10"],
      correctAnswer: "RAID 5",
    },
    {
      question: "What is the primary purpose of striping in RAID?",
      options: [
        "Increase redundancy",
        "Improve fault tolerance",
        "Enhance performance",
        "Reduce disk usage",
      ],
      correctAnswer: "Enhance performance",
    },
    {
      question: "Which RAID level combines mirroring and striping?",
      options: ["RAID 5", "RAID 10", "RAID 0", "RAID 2"],
      correctAnswer: "RAID 10",
    },
    {
      question: "What is a key feature of RAID 6?",
      options: [
        "No parity information",
        "Dual parity for enhanced fault tolerance",
        "Single disk operation",
        "Faster mirroring",
      ],
      correctAnswer: "Dual parity for enhanced fault tolerance",
    },
    {
      question: "What is the term for recovering data from a failed RAID disk?",
      options: ["Striping", "Redundancy", "Rebuilding", "Mirroring"],
      correctAnswer: "Rebuilding",
    },
    {
      question: "What is the primary storage medium in SSDs?",
      options: [
        "Rotating platters",
        "Magnetic coating",
        "Flash memory",
        "Capacitive cells",
      ],
      correctAnswer: "Flash memory",
    },
    {
      question: "What is a common cause of SSD performance degradation?",
      options: [
        "Heat",
        "File fragmentation",
        "NAND cell wear",
        "Defective platters",
      ],
      correctAnswer: "NAND cell wear",
    },
    {
      question:
        "Which component in an SSD temporarily stores frequently accessed data?",
      options: [
        "NAND chip",
        "DRAM cache",
        "Controller",
        "Error correction unit",
      ],
      correctAnswer: "DRAM cache",
    },
    {
      question: "What is the primary benefit of DRAM in SSDs?",
      options: [
        "Increased durability",
        "Enhanced data security",
        "Faster access speeds",
        "Reduced cost",
      ],
      correctAnswer: "Faster access speeds",
    },
    {
      question: "Which is a disadvantage of QLC NAND compared to SLC NAND?",
      options: [
        "Lower power efficiency",
        "Shorter lifespan",
        "Higher cost",
        "Reduced performance",
      ],
      correctAnswer: "Shorter lifespan",
    },
    {
      question: "What determines the storage capacity of an optical disk?",
      options: [
        "Track width and laser wavelength",
        "Coating material",
        "Disk rotation speed",
        "Reflective layer",
      ],
      correctAnswer: "Track width and laser wavelength",
    },
    {
      question: "Which optical storage format offers the highest capacity?",
      options: ["CD", "DVD", "Blu-ray", "HD-DVD"],
      correctAnswer: "Blu-ray",
    },
    {
      question: "What is a disadvantage of optical storage compared to SSDs?",
      options: [
        "Higher durability",
        "Slower access times",
        "Lower storage cost",
        "Greater portability",
      ],
      correctAnswer: "Slower access times",
    },
    {
      question: "What is the typical lifespan of an optical disk?",
      options: ["1–5 years", "10–30 years", "50–100 years", "Unlimited"],
      correctAnswer: "10–30 years",
    },
    {
      question:
        "Which technology is used in Blu-ray disks for higher data density?",
      options: [
        "Dual lasers",
        "Blue-violet laser",
        "Dual-layer reflectivity",
        "Optical pit compression",
      ],
      correctAnswer: "Blue-violet laser",
    },
    {
      question:
        "Which type of I/O command is used to instruct a peripheral to perform an action?",
      options: ["Control", "Read", "Write", "Test"],
      correctAnswer: "Control",
    },
    {
      question:
        "What is the main role of the processor communication function in an I/O module?",
      options: [
        "Formatting data",
        "Error correction",
        "Sending and receiving commands",
        "Managing clock speed",
      ],
      correctAnswer: "Sending and receiving commands",
    },
    {
      question: "What is an advantage of using data buffering in I/O modules?",
      options: [
        "Reduced hardware costs",
        "Smoother data transfer",
        "Faster data storage",
        "Simplified error detection",
      ],
      correctAnswer: "Smoother data transfer",
    },
    {
      question:
        "Which external device standard supports daisy-chaining of devices?",
      options: ["Ethernet", "FireWire", "USB", "SATA"],
      correctAnswer: "FireWire",
    },
    {
      question:
        "Which I/O module function checks if a device is powered and ready?",
      options: ["Control", "Test", "Read", "Buffer"],
      correctAnswer: "Test",
    },
    {
      question: "What is the primary focus of RISC architecture?",
      options: [
        "Optimizing hardware",
        "Simplifying instructions",
        "Increasing instruction complexity",
        "Reducing general-purpose registers",
      ],
      correctAnswer: "Simplifying instructions",
    },
    {
      question: "Which type of architecture uses fixed instruction lengths?",
      options: ["CISC", "RISC", "Both", "Neither"],
      correctAnswer: "RISC",
    },
    {
      question: "What is an advantage of RISC over CISC?",
      options: [
        "Easier instruction decoding",
        "Complex addressing modes",
        "Smaller code size",
        "Multiple instructions per cycle",
      ],
      correctAnswer: "Easier instruction decoding",
    },
    {
      question:
        "Which architecture typically requires more memory due to larger code size?",
      options: ["RISC", "CISC", "Both", "Neither"],
      correctAnswer: "RISC",
    },
    {
      question:
        "Which type of processor is better for battery-operated devices?",
      options: ["RISC", "CISC", "Both", "Neither"],
      correctAnswer: "RISC",
    },
    {
      question: "What does the command MOV in assembly language do?",
      options: [
        "Adds two values",
        "Moves data from one location to another",
        "Multiplies two registers",
        "Halts the program",
      ],
      correctAnswer: "Moves data from one location to another",
    },
    {
      question:
        "What is a common tool for debugging assembly language programs?",
      options: ["Compiler", "Assembler", "Emulator", "Interpreter"],
      correctAnswer: "Assembler",
    },
    {
      question: "Which is an example of a low-level programming language?",
      options: ["Python", "C", "Assembly", "Java"],
      correctAnswer: "Assembly",
    },
    {
      question: "Why is assembly language considered hardware-specific?",
      options: [
        "It requires less memory",
        "It directly maps to machine code",
        "It uses complex commands",
        "It is compatible with all processors",
      ],
      correctAnswer: "It directly maps to machine code",
    },
    {
      question:
        "What is a disadvantage of assembly language compared to high-level languages?",
      options: [
        "Slower execution",
        "Hardware independence",
        "Greater complexity",
        "Higher memory usage",
      ],
      correctAnswer: "Greater complexity",
    },
    {
      question: "What does virtual memory allow a computer to do?",
      options: [
        "Use disk storage as additional RAM",
        "Increase CPU speed",
        "Store data permanently",
        "Access memory faster",
      ],
      correctAnswer: "Use disk storage as additional RAM",
    },
    {
      question: "What is a kilobyte equal to?",
      options: ["1000 bytes", "1024 bytes", "128 bytes", "2048 bytes"],
      correctAnswer: "1024 bytes",
    },
    {
      question:
        "Which component of a CPU temporarily holds data for execution?",
      options: ["RAM", "Cache", "Register", "Hard disk"],
      correctAnswer: "Register",
    },
    {
      question: "What is the fundamental unit of computer storage?",
      options: ["Byte", "Word", "Bit", "File"],
      correctAnswer: "Bit",
    },
    {
      question: "What is segmentation in memory management?",
      options: [
        "Dividing memory into equal partitions",
        "Subdividing memory into logical segments",
        "Allocating memory sequentially",
        "Using disk space as memory",
      ],
      correctAnswer: "Subdividing memory into logical segments",
    },
    {
      question:
        "Which technology allows devices to connect wirelessly over a local network?",
      options: ["USB", "Wi-Fi", "SATA", "Ethernet"],
      correctAnswer: "Wi-Fi",
    },
    {
      question: "What is the primary function of FireWire?",
      options: [
        "Networking",
        "High-speed data transfer",
        "Power supply",
        "Cloud communication",
      ],
      correctAnswer: "High-speed data transfer",
    },
    {
      question: "Which is NOT a characteristic of Thunderbolt connections?",
      options: [
        "Daisy-chaining devices",
        "High-speed transfer rates",
        "Limited to internal storage",
        "Dual protocol support",
      ],
      correctAnswer: "Limited to internal storage",
    },
    {
      question: "What is a typical application of InfiniBand?",
      options: [
        "Wireless communication",
        "High-performance computing",
        "Consumer electronics",
        "Optical disk drives",
      ],
      correctAnswer: "High-performance computing",
    },
    {
      question: "What does PCIe stand for?",
      options: [
        "Peripheral Component Interconnect Express",
        "Personal Communication Interface Ethernet",
        "Parallel Computing Interconnect Expansion",
        "Primary Controller Interface Element",
      ],
      correctAnswer: "Peripheral Component Interconnect Express",
    },
    {
      question: "What is the role of the read/write head in a magnetic disk?",
      options: [
        "To store data",
        "To rotate the disk",
        "To record and retrieve data",
        "To control rotational speed",
      ],
      correctAnswer: "To record and retrieve data",
    },
    {
      question: "Which factor contributes most to rotational latency?",
      options: [
        "Track density",
        "Disk diameter",
        "Disk rotation speed",
        "Number of platters",
      ],
      correctAnswer: "Disk rotation speed",
    },
    {
      question: "What happens when a read/write head 'crashes'?",
      options: [
        "The disk spins faster",
        "The head damages the disk surface",
        "The system shuts down",
        "Data access improves",
      ],
      correctAnswer: "The head damages the disk surface",
    },
    {
      question:
        "What is the main purpose of the actuator arm in a magnetic disk?",
      options: [
        "Read/write data",
        "Rotate the disk",
        "Move the read/write head",
        "Power the disk",
      ],
      correctAnswer: "Move the read/write head",
    },
    {
      question: "What is a sector in the context of magnetic disks?",
      options: [
        "A single platter",
        "A subdivision of a track",
        "A group of disks",
        "A file location",
      ],
      correctAnswer: "A subdivision of a track",
    },
    {
      question:
        "Which RAID level is most commonly used for fault tolerance and performance?",
      options: ["RAID 0", "RAID 1", "RAID 5", "RAID 2"],
      correctAnswer: "RAID 5",
    },
    {
      question: "Which RAID level requires at least four drives?",
      options: ["RAID 0", "RAID 1", "RAID 6", "RAID 10"],
      correctAnswer: "RAID 6",
    },
    {
      question: "What is the main benefit of RAID 1 over RAID 0?",
      options: [
        "Increased speed",
        "Redundancy",
        "Lower cost",
        "Larger capacity",
      ],
      correctAnswer: "Redundancy",
    },
    {
      question: "In RAID, what does the term 'hot spare' mean?",
      options: [
        "A drive used for striping",
        "A redundant drive that can replace a failed one",
        "A drive used for faster access",
        "A secondary storage device",
      ],
      correctAnswer: "A redundant drive that can replace a failed one",
    },
    {
      question: "Which of the following is NOT a characteristic of RAID?",
      options: [
        "Data redundancy",
        "Improved performance",
        "Reduced data storage capacity",
        "Single disk operation",
      ],
      correctAnswer: "Single disk operation",
    },
    {
      question: "What does TRIM command do in SSDs?",
      options: [
        "Reduces storage capacity",
        "Optimizes garbage collection",
        "Cleans magnetic disks",
        "Increases access time",
      ],
      correctAnswer: "Optimizes garbage collection",
    },
    {
      question: "What type of NAND offers the best durability?",
      options: ["SLC", "MLC", "TLC", "QLC"],
      correctAnswer: "SLC",
    },
    {
      question: "Which component helps manage wear leveling in SSDs?",
      options: ["Controller", "Cache", "NAND chips", "Error correction unit"],
      correctAnswer: "Controller",
    },
    {
      question: "What is wear leveling in SSDs?",
      options: [
        "A method to minimize wear on specific cells",
        "Increasing storage capacity",
        "Enhancing rotational speed",
        "Reducing latency",
      ],
      correctAnswer: "A method to minimize wear on specific cells",
    },
    {
      question: "Which SSD feature ensures data integrity during power loss?",
      options: [
        "Over-provisioning",
        "Power loss protection",
        "Write caching",
        "TRIM",
      ],
      correctAnswer: "Power loss protection",
    },
    {
      question: "What is the storage capacity of a single-layer Blu-ray disk?",
      options: ["4.7 GB", "8.5 GB", "25 GB", "50 GB"],
      correctAnswer: "25 GB",
    },
    {
      question:
        "What is a disadvantage of optical disks compared to magnetic storage?",
      options: [
        "Higher durability",
        "Slower access speeds",
        "Higher cost",
        "Smaller form factor",
      ],
      correctAnswer: "Slower access speeds",
    },
    {
      question: "Which optical disk can store data on both sides?",
      options: ["CD-R", "DVD-DL", "Blu-ray", "CD-ROM"],
      correctAnswer: "DVD-DL",
    },
    {
      question: "What is the function of error correction in optical disks?",
      options: [
        "Compress data",
        "Improve read speed",
        "Correct data read errors",
        "Reduce disk capacity",
      ],
      correctAnswer: "Correct data read errors",
    },
    {
      question: "Which component of an optical disk is most prone to damage?",
      options: [
        "Reflective layer",
        "Polycarbonate base",
        "Protective acrylic coat",
        "Pitted surface",
      ],
      correctAnswer: "Pitted surface",
    },
    {
      question:
        "What is the primary purpose of control and timing in an I/O module?",
      options: [
        "Synchronize data flow",
        "Increase processing speed",
        "Detect errors",
        "Buffer data",
      ],
      correctAnswer: "Synchronize data flow",
    },
    {
      question: "What is the main advantage of USB as an interface?",
      options: [
        "Faster speeds than PCIe",
        "Universal compatibility",
        "Lower cost than Ethernet",
        "No latency",
      ],
      correctAnswer: "Universal compatibility",
    },
    {
      question:
        "Which I/O module function ensures smooth data transfer between devices?",
      options: [
        "Error correction",
        "Data buffering",
        "Control and timing",
        "Device communication",
      ],
      correctAnswer: "Data buffering",
    },
    {
      question:
        "What is the primary purpose of the test command in I/O modules?",
      options: [
        "Execute program instructions",
        "Check device status",
        "Transfer data",
        "Detect errors",
      ],
      correctAnswer: "Check device status",
    },
    {
      question: "Which of the following is NOT a function of an I/O module?",
      options: [
        "Data buffering",
        "Device communication",
        "Instruction decoding",
        "Processor communication",
      ],
      correctAnswer: "Instruction decoding",
    },
    {
      question: "What is a key benefit of pipelining in RISC architecture?",
      options: [
        "Increased instruction complexity",
        "Faster instruction execution",
        "Reduced need for registers",
        "Simplified memory access",
      ],
      correctAnswer: "Faster instruction execution",
    },
    {
      question: "Which type of architecture uses variable-sized instructions?",
      options: ["RISC", "CISC", "Both", "Neither"],
      correctAnswer: "CISC",
    },
    {
      question: "What is a disadvantage of RISC compared to CISC?",
      options: [
        "Larger code size",
        "Slower instruction execution",
        "Limited registers",
        "Complex addressing modes",
      ],
      correctAnswer: "Larger code size",
    },
    {
      question: "What is an advantage of CISC over RISC?",
      options: [
        "Simple instruction decoding",
        "Reduced code size",
        "Faster execution time",
        "Easier pipelining",
      ],
      correctAnswer: "Reduced code size",
    },
    {
      question: "Which architecture executes one instruction per cycle?",
      options: ["RISC", "CISC", "Both", "Neither"],
      correctAnswer: "RISC",
    },
    {
      question: "What is the primary role of the assembler?",
      options: [
        "Execute assembly code",
        "Translate assembly code into machine code",
        "Optimize program execution",
        "Debug programs",
      ],
      correctAnswer: "Translate assembly code into machine code",
    },
    {
      question:
        "Which instruction is used to add two values in assembly language?",
      options: ["MOV", "ADD", "SUB", "INC"],
      correctAnswer: "ADD",
    },
    {
      question: "What is a common output of assembly language programs?",
      options: ["Source code", "Machine code", "High-level code", "Debug logs"],
      correctAnswer: "Machine code",
    },
    {
      question: "Which language is considered closer to hardware?",
      options: ["Python", "C++", "Assembly", "JavaScript"],
      correctAnswer: "Assembly",
    },
    {
      question: "What is a key limitation of assembly language?",
      options: [
        "Slow execution",
        "High memory usage",
        "Lack of portability",
        "Complex syntax",
      ],
      correctAnswer: "Lack of portability",
    },
    {
      question: "What does segmentation improve in memory management?",
      options: [
        "Speed of data transfer",
        "Logical organization of programs",
        "Processor efficiency",
        "Hardware utilization",
      ],
      correctAnswer: "Logical organization of programs",
    },
    {
      question: "What is a page in virtual memory?",
      options: [
        "A physical storage unit",
        "A fixed-size block of data",
        "A memory address",
        "An instruction format",
      ],
      correctAnswer: "A fixed-size block of data",
    },
    {
      question: "What is the purpose of swapping in memory management?",
      options: [
        "Free up RAM for active processes",
        "Increase processor speed",
        "Load programs faster",
        "Optimize disk space",
      ],
      correctAnswer: "Free up RAM for active processes",
    },
    {
      question: "Which memory type is volatile?",
      options: ["ROM", "Flash memory", "RAM", "Magnetic tape"],
      correctAnswer: "RAM",
    },
    {
      question: "What does a parity bit check?",
      options: [
        "Disk capacity",
        "Data errors",
        "File formats",
        "Memory access speed",
      ],
      correctAnswer: "Data errors",
    },
    {
      question:
        "Which external interface is used for connecting internal storage devices?",
      options: ["Ethernet", "USB", "SATA", "Thunderbolt"],
      correctAnswer: "SATA",
    },
    {
      question: "What is a key feature of PCI Express?",
      options: [
        "Daisy-chaining capability",
        "High-speed serial communication",
        "Wireless data transfer",
        "Magnetic data storage",
      ],
      correctAnswer: "High-speed serial communication",
    },
    {
      question:
        "What is the maximum length of a USB cable for reliable communication?",
      options: ["2 meters", "5 meters", "10 meters", "20 meters"],
      correctAnswer: "5 meters",
    },
    {
      question: "What type of topology does Ethernet commonly use?",
      options: ["Ring", "Star", "Mesh", "Tree"],
      correctAnswer: "Star",
    },
    {
      question:
        "Which external connection standard supports dual protocols (PCIe and DisplayPort)?",
      options: ["USB", "SATA", "Thunderbolt", "FireWire"],
      correctAnswer: "Thunderbolt",
    },
    {
      question: "What is fault tolerance in computing?",
      options: [
        "Increasing system speed",
        "Ability to operate despite component failure",
        "Reducing hardware cost",
        "Minimizing disk usage",
      ],
      correctAnswer: "Ability to operate despite component failure",
    },
    {
      question: "What is ECC used for?",
      options: [
        "Increasing storage capacity",
        "Correcting single-bit errors in memory",
        "Compressing data",
        "Speeding up disk access",
      ],
      correctAnswer: "Correcting single-bit errors in memory",
    },
    {
      question: "Which RAID level offers dual-parity protection?",
      options: ["RAID 5", "RAID 6", "RAID 0", "RAID 1"],
      correctAnswer: "RAID 6",
    },
    {
      question:
        "What is the primary benefit of redundancy in fault-tolerant systems?",
      options: [
        "Faster access times",
        "Data recoverability",
        "Lower latency",
        "Reduced cost",
      ],
      correctAnswer: "Data recoverability",
    },
    {
      question: "What is a watchdog timer used for in fault tolerance?",
      options: [
        "Backup data",
        "Monitor system operation",
        "Control data transfer",
        "Synchronize memory",
      ],
      correctAnswer: "Monitor system operation",
    },
    {
      question: "What is the function of a magnetic disk's spindle?",
      options: [
        "Read data",
        "Write data",
        "Rotate the platters",
        "Store magnetic fields",
      ],
      correctAnswer: "Rotate the platters",
    },
    {
      question: "Which layer of a magnetic disk is magnetizable?",
      options: ["Substrate", "Outer coating", "Inner core", "Aluminum alloy"],
      correctAnswer: "Outer coating",
    },
    {
      question: "What improves read/write reliability on a magnetic disk?",
      options: [
        "Reduced track density",
        "Uniform magnetic film surface",
        "Increased rotational speed",
        "Dual-layer platters",
      ],
      correctAnswer: "Uniform magnetic film surface",
    },
    {
      question: "Which mechanism ensures alignment of the read/write head?",
      options: [
        "Disk controller",
        "Actuator arm",
        "Rotational latency",
        "Magnetic field sensor",
      ],
      correctAnswer: "Disk controller",
    },
    {
      question:
        "What is the smallest addressable storage unit on a magnetic disk?",
      options: ["Sector", "Track", "Cluster", "Head"],
      correctAnswer: "Sector",
    },
    {
      question: "Which RAID level does not use redundancy?",
      options: ["RAID 0", "RAID 1", "RAID 5", "RAID 6"],
      correctAnswer: "RAID 0",
    },
    {
      question: "What happens when a RAID 5 disk fails?",
      options: [
        "Data is lost permanently",
        "Data can be reconstructed using parity",
        "System crashes",
        "No effect on performance",
      ],
      correctAnswer: "Data can be reconstructed using parity",
    },
    {
      question: "What is required for RAID 10 to function?",
      options: [
        "At least 4 disks",
        "At least 2 disks",
        "A single disk",
        "Dual parity",
      ],
      correctAnswer: "At least 4 disks",
    },
    {
      question: "What is the main purpose of a RAID controller?",
      options: [
        "Increase transfer speed",
        "Manage RAID configuration",
        "Improve disk cooling",
        "Backup data",
      ],
      correctAnswer: "Manage RAID configuration",
    },
    {
      question: "What is a disadvantage of RAID 1?",
      options: [
        "Slow performance",
        "High cost due to disk mirroring",
        "No fault tolerance",
        "Limited storage capacity",
      ],
      correctAnswer: "High cost due to disk mirroring",
    },
    {
      question:
        "Which of the following helps prevent data loss during SSD power failure?",
      options: [
        "Over-provisioning",
        "Capacitors",
        "Error correction",
        "Caching",
      ],
      correctAnswer: "Capacitors",
    },
    {
      question: "What is the main purpose of SSD over-provisioning?",
      options: [
        "Improve write performance",
        "Reduce physical wear",
        "Increase cache size",
        "Optimize read speeds",
      ],
      correctAnswer: "Improve write performance",
    },
    {
      question: "Which NAND type has the slowest write speed?",
      options: ["SLC", "MLC", "TLC", "QLC"],
      correctAnswer: "QLC",
    },
    {
      question: "What is garbage collection in SSDs?",
      options: [
        "Optimizing file storage",
        "Consolidating free space for future writes",
        "Clearing unused memory cells",
        "Removing invalid data",
      ],
      correctAnswer: "Consolidating free space for future writes",
    },
    {
      question: "What is the typical lifespan metric of SSDs?",
      options: [
        "Read cycles",
        "Write/erase cycles",
        "Cache hits",
        "Buffer reads",
      ],
      correctAnswer: "Write/erase cycles",
    },
    {
      question: "What does DVD stand for?",
      options: [
        "Digital Versatile Disk",
        "Dynamic Video Disk",
        "Data Virtual Disk",
        "Digital Video Disk",
      ],
      correctAnswer: "Digital Versatile Disk",
    },
    {
      question: "What is a dual-layer DVD's capacity?",
      options: ["4.7 GB", "8.5 GB", "25 GB", "50 GB"],
      correctAnswer: "8.5 GB",
    },
    {
      question:
        "Which layer is responsible for light reflection in optical disks?",
      options: [
        "Protective acrylic",
        "Reflective aluminum",
        "Polycarbonate base",
        "Pitted surface",
      ],
      correctAnswer: "Reflective aluminum",
    },
    {
      question: "Which optical disk is write-once and read-many?",
      options: ["CD-R", "CD-RW", "DVD-RAM", "Blu-ray"],
      correctAnswer: "CD-R",
    },
    {
      question: "Which type of laser is used for Blu-ray?",
      options: ["Infrared", "Red", "Blue-violet", "Ultraviolet"],
      correctAnswer: "Blue-violet",
    },
    {
      question: "What is the primary function of virtual memory?",
      options: [
        "Increase physical memory",
        "Simulate additional memory using disk space",
        "Improve CPU performance",
        "Enhance cache usage",
      ],
      correctAnswer: "Simulate additional memory using disk space",
    },
    {
      question: "What is compaction in memory management?",
      options: [
        "Releasing unused memory",
        "Merging free memory spaces into one",
        "Swapping processes to disk",
        "Allocating memory to threads",
      ],
      correctAnswer: "Merging free memory spaces into one",
    },
    {
      question: "What does segmentation provide?",
      options: [
        "Fixed memory allocation",
        "Logical memory division",
        "Faster access time",
        "Increased storage capacity",
      ],
      correctAnswer: "Logical memory division",
    },
    {
      question: "What is the size of a quadword in modern processors?",
      options: ["16 bits", "32 bits", "64 bits", "128 bits"],
      correctAnswer: "64 bits",
    },
    {
      question: "What is a page fault in virtual memory?",
      options: [
        "An error in physical memory",
        "A missing page in RAM",
        "A disk read failure",
        "A CPU cache miss",
      ],
      correctAnswer: "A missing page in RAM",
    },
    {
      question: "What is the speed of USB 3.0?",
      options: ["480 Mbps", "5 Gbps", "10 Gbps", "20 Gbps"],
      correctAnswer: "5 Gbps",
    },
    {
      question: "Which Ethernet standard supports 1 Gbps?",
      options: ["10Base-T", "100Base-T", "1000Base-T", "10GBase-T"],
      correctAnswer: "1000Base-T",
    },
    {
      question: "What is a common use of Thunderbolt connections?",
      options: [
        "Networking",
        "High-speed external devices",
        "Internal storage",
        "Wireless communication",
      ],
      correctAnswer: "High-speed external devices",
    },
    {
      question: "Which feature allows USB to supply power to devices?",
      options: [
        "Hot-swapping",
        "Power delivery",
        "Plug-and-play",
        "Error correction",
      ],
      correctAnswer: "Power delivery",
    },
    {
      question: "What is the topology of a USB connection?",
      options: ["Mesh", "Tree", "Star", "Ring"],
      correctAnswer: "Tree",
    },
    {
      question: "What is the purpose of parity bits in RAID?",
      options: [
        "Increase speed",
        "Recover data",
        "Compress files",
        "Improve access times",
      ],
      correctAnswer: "Recover data",
    },
    {
      question: "What is ECC memory used for?",
      options: [
        "Increase speed",
        "Detect and correct errors",
        "Expand storage",
        "Enhance caching",
      ],
      correctAnswer: "Detect and correct errors",
    },
    {
      question: "What is a basic example of hardware fault tolerance?",
      options: [
        "Mirroring drives",
        "Swapping memory",
        "Pipelining",
        "Using virtual memory",
      ],
      correctAnswer: "Mirroring drives",
    },
    {
      question: "What is a watchdog timer designed to do?",
      options: [
        "Reset a system during failures",
        "Increase speed",
        "Backup files",
        "Protect virtual memory",
      ],
      correctAnswer: "Reset a system during failures",
    },
    {
      question: "What is a redundant system's primary benefit?",
      options: [
        "Improved system speed",
        "Continued operation during failure",
        "Reduced power usage",
        "Enhanced portability",
      ],
      correctAnswer: "Continued operation during failure",
    },
    // Add more questions as needed
  ];
  res.status(200).json(quizData);
}
