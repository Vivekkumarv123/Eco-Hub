import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { FaGlobe, FaUniversity, FaHeartbeat, FaLeaf, FaWater, FaIndustry, FaLightbulb, FaHome, FaCity, FaRecycle, FaBook, FaBalanceScale, FaHandshake, FaGlobeAfrica, FaHandsHelping, FaSeedling } from 'react-icons/fa'; // Icons for SDGs
import './SDGs.css';
import Navbar from './Navbar';

const goals = [
    {
        id: 1,
        title: "No Poverty",
        description: "End poverty in all its forms everywhere.",
        icon: <FaGlobe />,
        targets: [
            "Eradicate extreme poverty for all people everywhere.",
            "Reduce at least by half the proportion of men, women and children living in poverty."
        ]
    },
    {
        id: 2,
        title: "Zero Hunger",
        description: "End hunger, achieve food security and improved nutrition and promote sustainable agriculture.",
        icon: <FaUniversity />,
        targets: [
            "End hunger and ensure access by all people to safe, nutritious and sufficient food.",
            "End all forms of malnutrition."
        ]
    },
    {
        id: 3,
        title: "Good Health and Well-being",
        description: "Ensure healthy lives and promote well-being for all at all ages.",
        icon: <FaHeartbeat />,
        targets: [
            "Reduce the global maternal mortality ratio.",
            "End the epidemics of AIDS, tuberculosis, malaria and neglected tropical diseases."
        ]
    },
    {
        id: 4,
        title: "Quality Education",
        description: "Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all.",
        icon: <FaBook />,
        targets: [
            "Ensure that all girls and boys complete free, equitable and quality primary and secondary education.",
            "Eliminate gender disparities in education."
        ]
    },
    {
        id: 5,
        title: "Gender Equality",
        description: "Achieve gender equality and empower all women and girls.",
        icon: <FaBalanceScale />,
        targets: [
            "End all forms of discrimination against all women and girls everywhere.",
            "Eliminate all forms of violence against all women and girls in public and private spheres."
        ]
    },
    {
        id: 6,
        title: "Clean Water and Sanitation",
        description: "Ensure availability and sustainable management of water and sanitation for all.",
        icon: <FaWater />,
        targets: [
            "Achieve universal and equitable access to safe and affordable drinking water.",
            "Improve water quality by reducing pollution, eliminating dumping, and minimizing release of hazardous chemicals and materials."
        ]
    },
    {
        id: 7,
        title: "Affordable and Clean Energy",
        description: "Ensure access to affordable, reliable, sustainable and modern energy for all.",
        icon: <FaLightbulb />,
        targets: [
            "Ensure universal access to affordable, reliable, and modern energy services.",
            "Increase substantially the share of renewable energy in the global energy mix."
        ]
    },
    {
        id: 8,
        title: "Decent Work and Economic Growth",
        description: "Promote sustained, inclusive and sustainable economic growth, full and productive employment and decent work for all.",
        icon: <FaIndustry />,
        targets: [
            "Achieve higher levels of economic productivity through diversification, technological upgrading, and innovation.",
            "Promote development-oriented policies that support productive activities, decent job creation, entrepreneurship, creativity and innovation."
        ]
    },
    {
        id: 9,
        title: "Industry, Innovation and Infrastructure",
        description: "Build resilient infrastructure, promote inclusive and sustainable industrialization, and foster innovation.",
        icon: <FaHome />,
        targets: [
            "Develop quality, reliable, sustainable and resilient infrastructure.",
            "Promote inclusive and sustainable industrialization."
        ]
    },
    {
        id: 10,
        title: "Reduced Inequality",
        description: "Reduce inequality within and among countries.",
        icon: <FaCity />,
        targets: [
            "Progressively achieve and sustain income growth of the bottom 40% of the population at a rate higher than the national average.",
            "Facilitate orderly, safe, regular and responsible migration and mobility of people."
        ]
    },
    {
        id: 11,
        title: "Sustainable Cities and Communities",
        description: "Make cities and human settlements inclusive, safe, resilient, and sustainable.",
        icon: <FaRecycle />,
        targets: [
            "Ensure access for all to adequate, safe, and affordable housing and basic services.",
            "Reduce the adverse per capita environmental impact of cities."
        ]
    },
    {
        id: 12,
        title: "Responsible Consumption and Production",
        description: "Ensure sustainable consumption and production patterns.",
        icon: <FaRecycle />,
        targets: [
            "Achieve the sustainable management and efficient use of natural resources.",
            "Substantially reduce waste generation through prevention, reduction, recycling, and reuse."
        ]
    },
    {
        id: 13,
        title: "Climate Action",
        description: "Take urgent action to combat climate change and its impacts.",
        icon: <FaLeaf />,
        targets: [
            "Strengthen resilience and adaptive capacity to climate-related hazards and natural disasters.",
            "Integrate climate change measures into national policies, strategies, and planning."
        ]
    },
    {
        id: 14,
        title: "Life Below Water",
        description: "Conserve and sustainably use the oceans, seas and marine resources for sustainable development.",
        icon: <FaHandsHelping />,
        targets: [
            "Prevent and significantly reduce marine pollution of all kinds.",
            "Sustainably manage and protect marine and coastal ecosystems."
        ]
    },
    {
        id: 15,
        title: "Life on Land",
        description: "Protect, restore and promote sustainable use of terrestrial ecosystems, sustainably manage forests, combat desertification, and halt and reverse land degradation and halt biodiversity loss.",
        icon: <FaSeedling />,
        targets: [
            "Ensure the conservation of mountain ecosystems.",
            "Combat desertification, restore degraded land and soil."
        ]
    },
    {
        id: 16,
        title: "Peace, Justice and Strong Institutions",
        description: "Promote peaceful and inclusive societies for sustainable development, provide access to justice for all and build effective, accountable and inclusive institutions at all levels.",
        icon: <FaHandshake />,
        targets: [
            "Significantly reduce all forms of violence and related death rates everywhere.",
            "Promote the rule of law at the national and international levels."
        ]
    },
    {
        id: 17,
        title: "Partnerships for the Goals",
        description: "Strengthen the means of implementation and revitalize the global partnership for sustainable development.",
        icon: <FaGlobeAfrica />,
        targets: [
            "Enhance global macroeconomic stability, including through policy coordination and policy coherence.",
            "Enhance the global partnership for sustainable development."
        ]
    }
];

const SDGs = () => {
    return (
        <div>
      <div className='navbar-container'>
        <Navbar />
      </div>
        <Container className="my-5">
            <Row>
                {goals.map(goal => (
                    <Col md={4} sm={6} xs={12} key={goal.id} className="mb-4">
                        <Card>
                            <Card.Body>
                                <div className="text-center mb-3">{goal.icon}</div>
                                <Card.Title className="text-center">{goal.title}</Card.Title>
                                <Card.Text>{goal.description}</Card.Text>
                                <ul>
                                    {goal.targets.map((target, index) => (
                                        <li key={index}>{target}</li>
                                    ))}
                                </ul>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
        </div>
    );
}

export default SDGs;
