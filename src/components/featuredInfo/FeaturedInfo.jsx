import React from 'react'
import './FeaturedInfo.css'
import { ArrowDownward, ArrowUpward } from '@material-ui/icons'

export default function FeaturedInfo() {
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">Revenue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,415</span>
                    <span className="featuredMoneyRate">-11.5<ArrowDownward className="featuredIcon"/></span>
                </div>
                    <span className="featuredSub">Compare to last month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Cost</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,675</span>
                    <span className="featuredMoneyRate">+21.5<ArrowUpward className="featuredIcon positive"/></span>
                </div>
                    <span className="featuredSub">Compare to last month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Sales</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,415</span>
                    <span className="featuredMoneyRate">-1.5<ArrowDownward className="featuredIcon"/></span>
                </div>
                    <span className="featuredSub">Compare to last month</span>
            </div>
        </div>
    )
}
