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
    options: ["Rotational delay", "Seek time", "Transfer time", "Access time"],
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
    question: "What type of head design is used in modern rigid disk systems?",
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

  // Add more questions as needed
];
