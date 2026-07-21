import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { ImageWithFallback } from '../ImageWithFallback';
import { ArrowRight, Award, Building2, Calendar, CheckCircle, Clock, DollarSign, Globe, GraduationCap, Loader2, MapPin, Users } from 'lucide-react';
import { universitiesApi } from '@/services/universitiesApi';
import UserContext from '@/Context/UserContext';

const UniversityDetails = () => {
    const { id } = useParams();
    const [university, setUniversity] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const formatDate = (dateValue) => {
        if (!dateValue) return 'Not specified';

        const date = new Date(dateValue);
        if (Number.isNaN(date.getTime())) return dateValue;

        return new Intl.DateTimeFormat('en-US', {
            day: '2-digit',
            month: 'long',
            year: 'numeric',
        }).format(date);
    };

    useEffect(() => {
        const fetchUniversityDetails = async () => {
            setIsLoading(true);
            try {
                const data = await universitiesApi.getUniversityById(id);
                setUniversity(data.data);
            } catch (error) {
                console.error('Error fetching university details:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchUniversityDetails();
    }, [id]);

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#F9FAFB]">
                <div className="text-xl font-semibold text-slate-500 flex flex-col items-center gap-4">
                    <Loader2 className="h-8 w-8 animate-spin text-[#0B7077]" />
                    Loading universities...
                </div>
            </div>
        );
    }

    if (!university) {
        return (
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
                <h1 className="text-2xl font-bold text-gray-900 mb-4">University not found</h1>
                <Link to="/university" className="text-blue-600 cursor-pointer hover:underline">
                    Back to Universities
                </Link>
            </div>
        );
    }
    return (
        <div key={university._id} className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            < div className="relative h-100" >
                <ImageWithFallback
                    src={university.image?.url}
                    alt={university.name}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 to-black/30"></div>

                <div className="absolute inset-0 flex items-end">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
                        <div className="inline-block bg-white px-4 py-2 rounded-full text-sm font-semibold text-orange-600 mb-4">
                            World Ranking #{university.worldRanking}
                        </div>
                        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                            {university.name}
                        </h1>
                        <div className="flex flex-wrap gap-4 text-white">
                            <div className="flex items-center gap-2">
                                <MapPin className="size-5" />
                                <span>{university.city}, {university.country}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Building2 className="size-5" />
                                <span>{university.type} University</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="size-5" />
                                <span>Founded {university.founded}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div >

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Overview */}
                        <div className="bg-white rounded-xl shadow-sm p-6">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                {university.description}
                            </p>

                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="flex items-start gap-3">
                                    <div className="bg-green-100 p-2 rounded-lg">
                                        <Users className="size-5 text-[#09585e]" />
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-600">Total Students</div>
                                        <div className="text-lg font-semibold text-gray-900">
                                            {university.studentPopulation?.toLocaleString()}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <div className="bg-green-100 p-2 rounded-lg">
                                        <Globe className="size-5 text-[#09585e]" />
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-600">International Students</div>
                                        <div className="text-lg font-semibold text-gray-900">
                                            {university.internationalStudents}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <div className="bg-green-100 p-2 rounded-lg">
                                        <Award className="size-5 text-[#09585e]" />
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-600">University Type</div>
                                        <div className="text-lg font-semibold text-gray-900">
                                            {university.universityType}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <div className="bg-green-100 p-2 rounded-lg">
                                        <GraduationCap className="size-5 text-[#09585e]" />
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-600">Programs Offered</div>
                                        <div className="text-lg font-semibold text-gray-900">
                                            {university.programsOfferedCount || university.availablePrograms?.length || '10+'} Courses
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Campus Life */}
                        <div className="bg-white rounded-xl shadow-sm p-6">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Campus Life</h2>
                            <p className="text-gray-600 leading-relaxed">
                                {university.campusLife}
                            </p>
                        </div>

                        {/* Facilities */}
                        <div className="bg-white rounded-xl shadow-sm p-6">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Facilities</h2>
                            <div className="grid sm:grid-cols-2 gap-3">
                                {university.facilities?.map((facility, index) => (
                                    <div key={index} className="flex items-center gap-2">
                                        <CheckCircle className="size-5 text-green-600 shrink-0" />
                                        <span className="text-gray-700">{facility}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Available Courses */}
                        <div className="bg-white rounded-xl shadow-sm p-6">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Available Programs</h2>
                            <div className="space-y-4">
                                {university.availablePrograms?.map((course) => (

                                    <div key={course.name} className="flex border p-4 rounded-xl items-start justify-between gap-4">
                                        <div className="flex-1">
                                            <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#0B7077] transition-colors">
                                                {course.name}
                                            </h3>
                                            <p className="text-sm text-gray-600 mb-3">
                                                {course.description}
                                            </p>
                                            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                                                <div className="flex items-center gap-1">
                                                    <GraduationCap className="size-4" />
                                                    <span>{course.degree}</span>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <Clock className="size-4" />
                                                    <span>{course.duration}</span>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <DollarSign className="size-4" />
                                                    <span>{course.tuitionFee}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <ArrowRight className="size-5 text-[#FD661F] shrink-0 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Quick Facts */}
                        <div className="bg-white rounded-xl shadow-sm p-6 sticky top-20">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Facts</h3>

                            <div className="space-y-4 mb-6">
                                <div className="pb-4 border-b border-gray-100">
                                    <div className="text-sm text-gray-600 mb-1">Location</div>
                                    <div className="font-semibold text-gray-900">{university.city}, {university.country}</div>
                                </div>

                                <div className="pb-4 border-b border-gray-100">
                                    <div className="text-sm text-gray-600 mb-1">World Ranking</div>
                                    <div className="font-semibold text-gray-900">#{university.worldRanking}</div>
                                </div>

                                <div className="pb-4 border-b border-gray-100">
                                    <div className="text-sm text-gray-600 mb-1">Application Deadline</div>
                                    <div className="font-semibold text-gray-900">{formatDate(university.applicationDeadline)}</div>
                                </div>

                                <div className="pb-4 border-b border-gray-100">
                                    <div className="text-sm text-gray-600 mb-1">Student Population</div>
                                    <div className="font-semibold text-gray-900">{university.studentPopulation?.toLocaleString()}</div>
                                </div>

                                <div>
                                    <div className="text-sm text-gray-600 mb-1">International Students</div>
                                    <div className="font-semibold text-gray-900">{university.internationalStudents}</div>
                                </div>
                            </div>

                            <Link
                                to="/apply"
                                className="block w-full bg-[#0B7077] text-white text-center px-6 py-3 rounded-lg font-semibold hover:bg-[#09585e] transition-colors mb-3"
                            >
                                Apply Now
                            </Link>

                            <Link
                                to="/contact"
                                className="block w-full bg-white text-[#FD661F] text-center px-6 py-3 rounded-lg font-semibold border-2 border-[#FD661F] hover:bg-orange-50 transition-colors"
                            >
                                Contact Counselor
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UniversityDetails;