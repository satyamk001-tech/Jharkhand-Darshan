package com.jharkhand.darshan.dto;

import java.io.Serializable;

public class StatsResponse implements Serializable {
    private String annualVisitors;
    private String totalDestinations;
    private String liveToursDaily;
    private String localPartners;

    public StatsResponse() {
        this.annualVisitors = "2.8M+";
        this.totalDestinations = "50+";
        this.liveToursDaily = "25+";
        this.localPartners = "500+";
    }

    public StatsResponse(String annualVisitors, String totalDestinations, String liveToursDaily, String localPartners) {
        this.annualVisitors = annualVisitors;
        this.totalDestinations = totalDestinations;
        this.liveToursDaily = liveToursDaily;
        this.localPartners = localPartners;
    }

    public String getAnnualVisitors() { return annualVisitors; }
    public void setAnnualVisitors(String annualVisitors) { this.annualVisitors = annualVisitors; }

    public String getTotalDestinations() { return totalDestinations; }
    public void setTotalDestinations(String totalDestinations) { this.totalDestinations = totalDestinations; }

    public String getLiveToursDaily() { return liveToursDaily; }
    public void setLiveToursDaily(String liveToursDaily) { this.liveToursDaily = liveToursDaily; }

    public String getLocalPartners() { return localPartners; }
    public void setLocalPartners(String localPartners) { this.localPartners = localPartners; }
}
